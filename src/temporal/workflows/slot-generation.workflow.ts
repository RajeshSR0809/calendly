import { proxyActivities } from "@temporalio/workflow";
import * as activities from "../activities/index.js";
import { RegenerateHostSlotsInput } from "../../services/slot.service.js";


const activitiesProxy = proxyActivities<typeof activities>({retry: { maximumAttempts: 3}, startToCloseTimeout: '10 mintues'});

export async function generateHostSlotsActivityWorkflow(input: RegenerateHostSlotsInput){
    await activitiesProxy.generateHostSlotsActivity(input);
}