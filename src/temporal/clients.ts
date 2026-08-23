import { date } from "zod";
import { TEMPORAL_ENABLED, TEMPORAL_TASK_QUEUE } from "../config/env.js";
import { RegenerateHostSlotsInput } from "../services/slot.service.js";
import { getTemporalClient } from "../config/temporal.js";
import { Client } from "@temporalio/client";

async function startWorkFlow(workflowName: string, workflowId: string, args: unknown[]) {

    if (!TEMPORAL_ENABLED) {
        console.warn('[temporal] Temporal not enabled, skipping workflow start')
        return null;
    }

    try {
        const client: Client | unknown = await Promise.race([
            getTemporalClient(),
            new Promise((_, reject) => { setTimeout(() => { reject(new Error("Temporal Client timeout conenction timeout")) }, 5000) })
        ]);

        const handle = await (client as Client).workflow.start(workflowName, { taskQueue: TEMPORAL_TASK_QUEUE, workflowId, args});
        return handle.workflowId;
    } catch (error) {
        console.error(`[temporal] Error starting workflow: ${workflowName} with id ${workflowId}, error: ${error}`);
        return null;
    }
}



export async function regenerateHostSlotWorkflow(input: RegenerateHostSlotsInput) {
    return startWorkFlow("regenerateHostSlotsWorkflow", `regenerate-host-slots${input.hostId}-${Date.now()}`, [input])
}