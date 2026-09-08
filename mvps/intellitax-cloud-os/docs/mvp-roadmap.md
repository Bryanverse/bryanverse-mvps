# IntelliTax Cloud OS — MVP Roadmap

## Build Principle

Ship a secure operating-system nucleus first. Do not attempt every tax form, every state, every bank product, or every franchise feature in the first release.

## Phase 0 — Foundation

- repo scaffolding
- environment separation: local / preview / staging / production
- Supabase project and RLS strategy
- identity, MFA and RBAC
- audit-event service
- consent service
- tenant model
- design system
- CI/CD
- observability
- security baseline and WISP control mapping

## Phase 1 — Operating System Nucleus

### Public / Sales
- marketing site
- pricing/demo flow
- lead capture
- CRM pipeline
- franchise interest flow

### Client
- account creation
- MFA
- client profile
- secure document upload
- document classification/extraction mock
- AI intake/interview
- missing-document checklist
- return status timeline
- consent records

### Professional
- Tax Preparer workspace
- ERO workspace
- CEO/Owner command center
- System Monitor / Compliance queue

### AI
- agent registry
- agent action log
- GREEN/YELLOW/RED approval engine
- model-provider abstraction
- knowledge retrieval service

### Tax
- deterministic tax-rule service framework
- versioned tax-year configuration
- 1040-focused mock workflow
- provider adapter interface

## Phase 2 — Commercial MVP

- Stripe SaaS billing
- franchise tenant onboarding
- preparer/user provisioning
- document vault
- DocuSign/e-sign adapter
- TaxSlayer/MyTaxPrepOffice sandbox or mock adapter
- EPS/Pathward/TPG banking adapter mocks
- return review workflow
- AI Compliance Agent
- AI Support Agent
- basic AI CFO metrics
- Academy MVP

## Phase 3 — Controlled Beta

- 3-5 internal/partner offices
- limited federal return scenarios supported through approved workflow/provider
- security penetration review
- WISP readiness review
- incident-response exercises
- consent/7216 test cases
- ERO workflow testing
- tax-year schema/version update simulation
- load and failure testing
- audit log validation

## Phase 4 — Production Readiness

- production provider credentials and approvals
- certification/assurance requirements where applicable
- approved bank-product integrations
- expanded tax forms/states based on demand
- franchise white-label controls
- AI Regulatory Intelligence
- AI Revenue/Sales engine
- AI Creative Studio
- Marketplace beta
- Academy expansion

## Phase 5 — National Scale

- state-by-state rule packs
- enterprise tenant controls
- multi-office EFIN/ERO governance
- advanced fraud detection
- 24/7 command center
- automated regulatory change management
- agent evaluation / red-team pipelines
- disaster recovery and regional failover
- enterprise APIs and partner ecosystem

## Definition of MVP Complete

The MVP is complete when a demo user can:
1. create an account securely
2. enter a tenant/role-aware experience
3. upload and classify documents
4. complete an AI-assisted intake
5. generate a structured mock tax case through deterministic rule services
6. route the case through compliance/ERO approval
7. track audit events and consent
8. use mock provider/banking adapters
9. access CEO/system-monitor dashboards
10. provision a franchise/office tenant and preparer account

No production IRS submission or real refund/bank-product transaction should be enabled until provider approvals and testing are complete.
