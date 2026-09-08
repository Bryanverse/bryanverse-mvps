# IntelliTax Cloud OS

IntelliTax Cloud OS is an AI-operated tax enterprise operating system for taxpayers, preparers, EROs, EFIN managers, CPAs, franchisees, academy students, marketplace providers, and IntelliTax leadership.

## 2026 Product Thesis

This is not a chatbot layered onto tax software. It is a multi-tenant SaaS operating system that coordinates the full tax-business lifecycle: marketing, sales, onboarding, document intelligence, tax preparation workflows, compliance review, e-file provider handoff, banking/refund products, support, finance, franchise operations, academy training, marketplace services, creative production, legal operations, and DevOps.

AI performs routine work. Humans act as System Monitors, Compliance Approvers, ERO Signatories, Exception Handlers, licensed professionals where required, and Strategic Owners.

## Safety / Compliance Principle

No autonomous agent may bypass required human approval, tax-law due diligence, provider certification, taxpayer consent, identity/security controls, or banking partner rules. Real IRS filing, refund advances, and bank-product actions remain behind provider adapters and approval gates until production credentials and approvals exist.

## Core Product Surfaces

- Public website and lead funnels
- Client mobile/tablet/desktop portal
- Tax Preparer/PTIN workspace
- ERO and EFIN control center
- CPA / advanced review workspace
- CEO / Owner command center
- AI Governance & Risk command center
- Franchise SaaS portal with unlimited preparer seats by plan
- IntelliTax Academy
- IntelliTax Services Marketplace
- AI Creative Studio
- AI Revenue & Sales engine
- AI CFO / finance center
- Regulatory Intelligence center
- Knowledge Vault and analytics layer

## Recommended 2026 Stack

- Frontend: Next.js + React + TypeScript + Tailwind + shadcn/ui
- Backend: FastAPI services + typed Next.js server/API layer where appropriate
- Data/Auth: PostgreSQL + Supabase Auth/Storage/RLS
- AI orchestration: LangGraph-style stateful workflows with model abstraction across OpenAI, Claude, and Vertex AI
- Production compute: Vercel frontend + Google Cloud Run/Vertex AI services
- Dev: Codex/Cursor/Claude Code against GitHub; Replit only for rapid prototypes/demos
- CI/CD: GitHub Actions + preview/staging/prod environments
- Observability: OpenTelemetry + GCP logging/monitoring + product audit events
- Billing: Stripe / Stripe Connect
- Integrations: modular adapters for TaxSlayer, MyTaxPrepOffice, EPS Financial, Pathward, TPG, Plaid, DocuSign, QuickBooks, Twilio, Figma, Canva and image-generation services

See `docs/2026-system-blueprint.md`, `docs/regulatory-guardrails.md`, `docs/mvp-roadmap.md`, and `CODEX_MASTER_PROMPT.md`.
