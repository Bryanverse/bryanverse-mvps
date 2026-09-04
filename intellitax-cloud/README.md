# IntelliTax Cloud

AI-native tax operating system for Bryanverse.

## Product mandate
IntelliTax Cloud is being rebuilt as a secure, multi-tenant tax preparation and firm-operations platform with taxpayer intake, preparer workflows, AI-assisted document and return review, human approval gates, compliance/audit trails, billing, and integration-ready e-file architecture.

## Initial modules
- Executive / firm dashboard
- Taxpayer portal
- Preparer workspace
- Document intake and extraction
- Return workflow and review states
- AI tax-agent orchestration
- Approval and exception queue
- Compliance and immutable audit trail
- Firm administration / RBAC
- Billing and subscription controls
- IRS / authorized e-file provider integration boundary
- Bryanverse OS control-plane integration

## Architecture target
- Next.js + React + TypeScript
- Supabase / PostgreSQL system of record
- Row-level security and tenant isolation
- Server-side API and worker layer
- Event-driven jobs and agent runs
- Vercel deployment target
- CI checks for lint, typecheck, tests and build

## Safety boundary
AI may assist with intake, classification, calculations, diagnostics, document review, explanations and draft recommendations. Filing, attestations, payment/refund actions, credential use, legal/tax positions requiring professional judgment, and other consequential actions remain approval-gated.

## Branch
Development initialized on `intellitax-cloud-build`.
