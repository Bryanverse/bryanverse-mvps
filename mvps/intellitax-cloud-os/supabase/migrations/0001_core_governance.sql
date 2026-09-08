create extension if not exists pgcrypto;

create type public.risk_level as enum ('GREEN', 'YELLOW', 'RED');
create type public.approval_status as enum ('PENDING', 'APPROVED', 'REJECTED', 'EXPIRED');

create table public.tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  tenant_id uuid references public.tenants(id) on delete cascade,
  display_name text,
  role text not null default 'client',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.ai_agents (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references public.tenants(id) on delete cascade,
  code text not null,
  name text not null,
  department text not null,
  status text not null default 'active',
  model_policy jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (tenant_id, code)
);

create table public.agent_actions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  agent_id uuid references public.ai_agents(id) on delete set null,
  actor_user_id uuid references auth.users(id) on delete set null,
  action_code text not null,
  category text not null,
  risk_level public.risk_level not null,
  confidence numeric(5,4),
  taxpayer_data_involved boolean not null default false,
  external_submission boolean not null default false,
  may_execute boolean not null default false,
  governance_reason text not null,
  payload_digest text,
  created_at timestamptz not null default now()
);

create table public.approvals (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  agent_action_id uuid not null references public.agent_actions(id) on delete cascade,
  status public.approval_status not null default 'PENDING',
  required_role text not null,
  reviewer_user_id uuid references auth.users(id) on delete set null,
  reviewer_notes text,
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.audit_events (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  actor_type text not null check (actor_type in ('user','agent','system','provider')),
  actor_id text,
  event_type text not null,
  resource_type text not null,
  resource_id text,
  metadata jsonb not null default '{}'::jsonb,
  previous_event_hash text,
  event_hash text not null,
  created_at timestamptz not null default now()
);

create index agent_actions_tenant_created_idx on public.agent_actions (tenant_id, created_at desc);
create index approvals_tenant_status_idx on public.approvals (tenant_id, status, created_at desc);
create index audit_events_tenant_created_idx on public.audit_events (tenant_id, created_at desc);

alter table public.tenants enable row level security;
alter table public.profiles enable row level security;
alter table public.ai_agents enable row level security;
alter table public.agent_actions enable row level security;
alter table public.approvals enable row level security;
alter table public.audit_events enable row level security;

-- Policies are intentionally deny-by-default until tenant membership helpers and service-role boundaries are implemented.
-- Codex must add explicit least-privilege policies before any production deployment.
