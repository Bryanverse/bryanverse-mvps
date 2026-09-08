import { NextResponse } from "next/server";
import { z } from "zod";
import { evaluateAgentAction } from "@/lib/governance";

const requestSchema = z.object({
  agentId: z.string().min(1),
  action: z.string().min(1),
  category: z.enum(["operations", "tax", "compliance", "filing", "banking", "legal", "security", "sales"]),
  confidence: z.number().min(0).max(1).optional(),
  containsTaxpayerData: z.boolean().optional(),
  requiresExternalSubmission: z.boolean().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid governance request", details: parsed.error.flatten() }, { status: 400 });
  }

  const decision = evaluateAgentAction(parsed.data);

  return NextResponse.json({
    decision,
    audit: {
      evaluatedAt: new Date().toISOString(),
      agentId: parsed.data.agentId,
      action: parsed.data.action,
    },
  });
}
