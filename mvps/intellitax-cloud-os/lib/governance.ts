export type RiskLevel = "GREEN" | "YELLOW" | "RED";

export type AgentAction = {
  agentId: string;
  action: string;
  category: "operations" | "tax" | "compliance" | "filing" | "banking" | "legal" | "security" | "sales";
  confidence?: number;
  containsTaxpayerData?: boolean;
  requiresExternalSubmission?: boolean;
};

export type GovernanceDecision = {
  level: RiskLevel;
  mayExecute: boolean;
  requiresHumanApproval: boolean;
  reason: string;
};

const RED_ACTIONS = new Set([
  "submit_tax_return",
  "ero_final_signoff",
  "respond_to_regulator",
  "resolve_fraud_case",
  "execute_material_contract",
  "override_security_control",
]);

const YELLOW_ACTIONS = new Set([
  "approve_unusual_deduction",
  "approve_refund_advance_workflow",
  "approve_marketplace_provider",
  "change_tax_rule_pack",
  "change_compliance_policy",
  "release_high_risk_return",
]);

export function evaluateAgentAction(input: AgentAction): GovernanceDecision {
  if (RED_ACTIONS.has(input.action)) {
    return {
      level: "RED",
      mayExecute: false,
      requiresHumanApproval: true,
      reason: "This action is reserved for authorized human signoff or regulated review.",
    };
  }

  if (YELLOW_ACTIONS.has(input.action)) {
    return {
      level: "YELLOW",
      mayExecute: false,
      requiresHumanApproval: true,
      reason: "AI may prepare and recommend this action, but an authorized reviewer must approve it.",
    };
  }

  if (input.requiresExternalSubmission && ["tax", "filing", "banking", "legal"].includes(input.category)) {
    return {
      level: "YELLOW",
      mayExecute: false,
      requiresHumanApproval: true,
      reason: "External regulated or material actions require an approval gate by default.",
    };
  }

  return {
    level: "GREEN",
    mayExecute: true,
    requiresHumanApproval: false,
    reason: "Routine low-risk operation may execute automatically and must be audit logged.",
  };
}
