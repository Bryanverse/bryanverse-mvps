# IntelliTax Cloud OS — 2026 System Blueprint

## Enterprise Model

IntelliTax Cloud OS is organized as an AI-operated tax enterprise rather than a conventional tax-preparation application.

### Human Roles
- System Monitor
- Compliance Approver
- ERO Signatory
- Exception Handler
- Licensed professional reviewer where required
- Strategic Owner / CEO

### AI-Operated Divisions
1. Marketing
2. Revenue & Sales
3. Client Onboarding
4. Tax Preparation
5. Compliance & Fraud Prevention
6. Filing / Provider Handoff
7. Banking & Refund Products
8. Franchise Operations
9. Support
10. Accounting / AI CFO
11. Legal / Contract Operations
12. Engineering / DevOps
13. IntelliTax Academy
14. Services Marketplace
15. Creative Studio
16. Governance, Security & Regulatory Intelligence

## Autonomous Workflow Pattern

Every material workflow is modeled as a state machine with:
- source data
- agent action
- deterministic validation
- confidence/risk score
- required evidence
- approval class (GREEN/YELLOW/RED)
- human approver if required
- immutable audit event
- downstream action

### GREEN
Low-risk routine automation may execute automatically.

### YELLOW
AI produces a recommendation; a qualified human approves before execution.

### RED
Execution is blocked until an authorized human completes required review/signoff.

## Core Agent Mesh

- AI COO / Orchestrator
- Regulatory Intelligence Agent
- Governance Officer Agent
- Document Intelligence Agent
- Client Interview Agent
- Tax Classification Agent
- Tax Preparation Agent
- Tax Optimization Agent
- Due Diligence Agent
- Fraud / Identity Risk Agent
- ERO Assistant
- Filing Status / Rejection Agent
- Banking / Refund Product Agent
- Revenue Manager Agent
- Prospecting / Outreach / Demo / Proposal agents
- Franchise Onboarding Agent
- Academy Tutor / Assessment Agent
- Marketplace Manager Agent
- Support / Voice Agent
- AI CFO
- Contract / LegalOps Agent
- Creative Director / Figma / Canva / Image agents
- DevOps / QA / Security agents

## Product Modules

### Taxpayer Experience
Account creation, MFA, identity checks, document upload/camera capture, conversational interview, return status, missing-item requests, consent, e-sign, refund method, support and secure document vault.

### Professional Workspaces
Role-specific queues for preparers, EROs, EFIN managers, CPAs, compliance reviewers and system monitors.

### Franchise SaaS
Tenant creation, branding, office/location hierarchy, preparer accounts, feature entitlements, billing, revenue share, training compliance, local marketing and performance analytics.

### IntelliTax Academy
Training and internal certification pathways for future preparers, active preparers, ERO operations, franchise owners, system monitors and AI-tax operations. IRS credentials or records of completion must never be represented as IntelliTax-issued government credentials.

### Marketplace
Approved providers can offer tax review, CPA, bookkeeping and related professional services. Marketplace activity is consent-scoped and tenant-aware.

### Creative Studio
Figma/design-system orchestration, Canva marketing templates, image-generation adapters, franchise brand kits, Academy materials and investor/marketing assets.

### Revenue Engine
Lead acquisition, qualification, outreach, appointment scheduling, demos, proposals, CRM state, affiliate attribution, SaaS conversion, expansion and churn intelligence.

## Integration Architecture

All external providers are accessed through replaceable adapters with sandbox/mock mode:
- e-file/tax prep: TaxSlayer, MyTaxPrepOffice, future approved MeF/third-party providers
- refund/bank products: EPS Financial, Pathward, TPG and approved alternatives
- identity/bank validation: Plaid and KYC provider adapters
- signatures: DocuSign/e-sign provider
- billing: Stripe/Stripe Connect
- accounting: QuickBooks
- messaging: Twilio + email provider
- creative: Figma, Canva, image-generation APIs
- AI: OpenAI, Claude, Vertex AI

No adapter is treated as production-active until credentials, commercial approval, security review and test certification are complete.

## Platform Architecture

- Web: Next.js / TypeScript
- API: FastAPI + typed internal service contracts
- Database: PostgreSQL / Supabase
- Tenant isolation: RLS + tenant-aware services
- Storage: encrypted object storage, document metadata separation
- AI orchestration: stateful workflow engine; tools invoked only through permissioned adapters
- Queues/events: durable jobs and event bus for long-running workflows
- Observability: traces, metrics, model/tool actions and immutable audit events
- Secrets: managed secret store; never client-exposed
- Deployments: preview, staging, production; gated promotion

## Tax Rule Engine

Do not rely on an LLM as the tax calculator. Separate:
1. authoritative tax-year data and forms
2. deterministic calculation/rules engine
3. AI interview/explanation layer
4. evidence and citations to applicable source/version
5. reviewer workflow

Tax rules, form schemas and provider rules are versioned by tax year and effective date.

## Data Governance

Tax-return information is segregated from generic CRM/marketing data. Use/redisclosure for non-return purposes must be consent-controlled. Analytics should default to de-identified/aggregated data with policy enforcement.

## Scale Goal

One OS supports:
- direct-to-consumer filing workflows
- IntelliTax-owned offices
- franchise / licensed offices
- white-label enterprise tenants
- Academy learners
- marketplace providers
while maintaining tenant isolation, credential boundaries and centralized governance.
