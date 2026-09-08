# IntelliTax Cloud OS — 2026 Regulatory & Security Guardrails

This document defines engineering guardrails, not legal advice.

## IRS / e-File

- Paid preparers need valid PTINs for the applicable year.
- ERO/e-file participation, software developer and transmitter roles are governed by IRS e-file application rules and relevant publications.
- MeF schemas/business rules are tax-year/version specific and may have multiple concurrent versions; the platform must version rules and provider adapters.
- Direct transmission requires approved software/provider roles and applicable IRS assurance testing. Until that exists, IntelliTax uses approved third-party/provider adapters.

## Data Security / GLBA / Safeguards

Tax and accounting practices are treated as financial institutions for GLBA Safeguards Rule purposes. IntelliTax must support:
- Written Information Security Plan (WISP)
- designated security owner / Qualified Individual workflow
- risk assessment register
- MFA by default
- encryption and key management
- service-provider security review
- ongoing safeguards testing/monitoring
- incident response and breach workflow
- FTC notification workflow for covered events

## Taxpayer Information / Consent

Build explicit policy gates around IRC 7216 and related consent rules:
- separate return-preparation use from marketing/cross-sell use
- consent record includes purpose, recipient, scope, timestamp and version
- no silent reuse of return information for unrelated revenue products
- analytics default to de-identified/aggregated information
- consent revocation / retention behavior is tracked

## AI Governance

AI may assist with interviews, extraction, explanation, anomaly detection, routing and draft preparation, but:
- calculations must resolve through deterministic/versioned tax rules
- models must expose confidence and source/evidence metadata
- high-risk outputs require approval
- model/tool calls touching taxpayer data are logged
- prompts must minimize PII exposure
- external-model data handling must be vendor-reviewed before production
- no training on taxpayer return data by default

## Identity / Fraud

- MFA for professional and administrative roles
- step-up authentication for high-risk actions
- identity/KYC adapter for bank/refund workflows
- anomaly detection for account takeover, synthetic identity, suspicious return patterns and EFIN misuse
- IP PIN-supporting client workflow where applicable
- compromised-credential and compromised-EFIN incident playbooks

## 2026 Tax Law / Form Intelligence

The platform must support effective-date/version updates rather than hardcoded assumptions. Current examples driving the 2026 rules library include:
- Tax Year 2026 inflation-adjusted brackets and standard deductions
- OBBBA/Working Families Tax Cuts provisions
- Schedule 1-A logic for qualified tips, qualified overtime, qualified passenger vehicle loan interest and enhanced senior deduction for applicable years
- business changes such as increased Section 179 limits and domestic research expenditure treatment

Regulatory Intelligence should ingest authoritative releases and open review tasks when forms/rules change.

## Academy Guardrail

IntelliTax Academy may issue IntelliTax training certificates. It must not imply that an internal certificate is a PTIN, EFIN, CPA license, enrolled-agent credential, IRS certification or AFSP Record of Completion. Where the Academy offers CE intended for IRS programs, use approved-provider pathways and label status precisely.

## Banking / Refund Products

Refund advance, refund transfer, ACH, check printing and card products must be governed by each approved banking partner's agreements, disclosures, underwriting and program rules. AI can pre-screen/rout but cannot override bank decisions or consumer-finance disclosures.

## Required Audit Events

Log at minimum:
- identity/auth events
- document access
- consent creation/use
- AI extraction and recommendations
- rule engine version
- human review/override
- filing provider submission/acknowledgment
- banking/refund product actions
- privilege/role changes
- export/download of sensitive data
- security incidents
