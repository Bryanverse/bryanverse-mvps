# Codex Master Build Prompt — IntelliTax Cloud OS 2026

You are the principal software architect and implementation agent for IntelliTax Cloud OS.

## Mission
Build a production-oriented MVP for an AI-operated tax enterprise operating system. AI handles routine business operations; humans act as System Monitors, Compliance Approvers, ERO Signatories, Exception Handlers, licensed reviewers where required, and Strategic Owners.

Do not treat this as a chatbot or single tax-prep app. Build a multi-tenant SaaS OS that coordinates marketing, sales, onboarding, document intelligence, tax-preparation workflows, compliance, provider filing handoff, banking/refund-product workflows, franchise operations, Academy training, marketplace services, support, finance, legal operations, creative production, and DevOps.

## Read First
Before coding, read:
- `README.md`
- `docs/2026-system-blueprint.md`
- `docs/regulatory-guardrails.md`
- `docs/mvp-roadmap.md`

## Non-Negotiable Architecture Rules
1. Do not use an LLM as the authoritative tax calculator. Build a deterministic, versioned tax-rule service interface.
2. All material AI actions produce an audit event, confidence score, evidence metadata and approval class.
3. Enforce GREEN/YELLOW/RED approval gates.
4. All third-party systems use replaceable adapters and mock/sandbox mode by default.
5. Do not enable real IRS filing or banking/refund-product transactions without production credentials and explicit feature flags.
6. Separate taxpayer return information from generic CRM/marketing data and build explicit consent records for non-return uses.
7. Enforce tenant isolation and least privilege.
8. No hardcoded credentials or secrets.

## Target Stack
- Next.js + React + TypeScript
- Tailwind + shadcn/ui + Lucide
- FastAPI for AI/rules/integration services where appropriate
- PostgreSQL / Supabase Auth / Storage / RLS
- LangGraph-style stateful orchestration or a clean internal workflow abstraction
- Vercel frontend
- Google Cloud Run/Vertex AI-ready backend services
- GitHub Actions
- Stripe/Stripe Connect adapter
- OpenTelemetry-compatible observability

## Roles
Implement role and permission scaffolding for:
- CEO/Owner
- System Monitor
- Compliance Approver
- ERO
- EFIN Manager
- PTIN/Tax Preparer
- CPA
- Franchise Owner
- Support Monitor
- Client/Taxpayer
- Academy Student/Admin
- Marketplace Provider
- Sales Manager
- DevOps Admin

## MVP Surfaces
### Public
Home, pricing/demo, franchise, Academy, marketplace, login/register.

### Client
Dashboard, profile, document upload/camera capture, AI intake, missing-items checklist, consent center, mock refund estimate, return timeline, signature status, support.

### Professional
Preparer queue, ERO approval queue, compliance queue, EFIN settings, client/return detail, override workflow.

### CEO / Governance
Executive dashboard, revenue/tenant metrics, AI activity, agent scores, compliance alerts, approval queue, regulatory updates, audit events.

### Franchise SaaS
Tenant setup, office/location config, unlimited preparer provisioning subject to plan/entitlement policy, branding settings, billing state, performance metrics.

### Academy
Course catalog, AI tutor shell, quiz/assessment, progress, IntelliTax certificate model, admin assignment. Never represent IntelliTax certificates as IRS/government credentials.

### Marketplace
Provider profile/listing, services, booking/request shell, platform fee/revenue-share scaffolding, approval workflow.

## AI Agent Registry
Seed definitions for:
AI COO, Governance Officer, Regulatory Officer, Client Intake, Document Intelligence, Tax Preparation, Tax Optimization, Due Diligence, Fraud/Identity Risk, ERO Assistant, Filing Status/Rejection, Banking/Refund Product, Revenue Manager, Prospecting, Outreach, Demo/Proposal, Franchise Onboarding, Academy Tutor, Marketplace Manager, Support/Voice, AI CFO, LegalOps, Creative Studio, DevOps, QA, Security.

Each agent config should include:
- id/name
- purpose
- allowed tools
- prohibited actions
- input/output schema
- approval class defaults
- escalation rules
- audit requirements
- model provider/config abstraction

## Third-Party Adapter Interfaces
Create mocked adapter contracts for:
- TaxSlayer
- MyTaxPrepOffice
- EPS Financial
- Pathward
- TPG
- Plaid/KYC
- DocuSign
- Stripe/Stripe Connect
- QuickBooks
- Twilio/email
- Figma
- Canva
- image generation
- OpenAI
- Claude
- Vertex AI

Each adapter must expose health/status, mock mode and normalized errors.

## Core Data Models
At minimum:
users, roles, memberships, tenants, offices, franchises, clients, tax_cases, tax_returns, documents, extraction_results, consent_records, rule_versions, ai_agents, agent_runs, agent_scores, approvals, audit_events, compliance_flags, filing_submissions, provider_acknowledgments, refund_methods, refund_products, payments, subscriptions, revenue_shares, leads, campaigns, sales_opportunities, academy_courses, lessons, quizzes, certifications, marketplace_providers, services, contracts, signatures, notifications, regulatory_updates, knowledge_items, creative_assets, support_tickets.

## Security / Compliance Requirements
- MFA-ready auth
- RBAC + RLS
- step-up auth for sensitive actions
- sensitive-field masking
- immutable audit-event pattern
- secure upload validation
- retention/deletion policy hooks
- WISP control checklist page
- incident-response workflow shell
- consent versioning
- model/tool PII minimization
- external-provider data handling behind adapters

## 2026 Tax-Year Design
Build tax-year and form-schema versioning from day one. Seed configuration objects for Tax Year 2026 and support future updates without code rewrites. Include a regulatory update ingestion/review workflow rather than hardcoding current rules into UI components.

## UX / Design
Create a polished fintech command-center aesthetic: white background, deep navy, electric blue, teal, restrained premium accent, strong hierarchy, responsive mobile/tablet/desktop behavior. Prioritize clarity, trust, accessibility and compliance cues over flashy animations.

Build reusable components: AppShell, Sidebar, TopNav, RoleSwitcher, MetricCard, StatusBadge, ApprovalQueue, AgentActivityFeed, AgentScoreCard, ComplianceAlert, DocumentUploadCard, ConsentCard, ClientTimeline, RevenueChart, CourseCard, MarketplaceCard, TenantSettingsCard, SignatureStatusCard, ProviderStatusCard, RegulatoryUpdateCard, RiskLockboxCard.

## Execution Order
1. Inspect repository and produce an architecture note and implementation plan.
2. Scaffold the app and shared packages.
3. Implement database schema/migrations and seed data.
4. Implement auth, tenant, role and audit foundations.
5. Build public + dashboard UI shell.
6. Build client intake/document flow.
7. Build agent registry + approval engine + mock orchestrator.
8. Build preparer/ERO/compliance queues.
9. Build CEO/governance dashboards.
10. Build SaaS/franchise scaffolding.
11. Add Academy/Marketplace MVP shells.
12. Add provider adapter mocks.
13. Add tests, CI, env template, docs and deployment guide.

## Quality Gates
- Typecheck/lint/tests must pass.
- Tenant isolation tests.
- approval-gate tests.
- consent-policy tests.
- role-permission tests.
- no secrets in repo.
- no real IRS/banking actions in mock mode.
- documented architecture decisions.

## Deliverables
- runnable MVP
- README and setup instructions
- architecture docs
- DB schema/migrations
- mock seed data
- adapter contracts
- AI agent registry
- test suite
- CI workflow
- environment template
- security checklist
- provider credential checklist
- implementation backlog

When a requirement is ambiguous, choose the safest modular implementation, document the assumption, and continue. Do not block progress on unavailable third-party credentials; use mock adapters and feature flags.
