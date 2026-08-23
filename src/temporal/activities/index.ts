import { RegenerateHostSlotsInput, regenerateHostSlots as runSlotsGeneration } from "../../services/slot.service.js";


export async function generateHostSlotsActivity(input: RegenerateHostSlotsInput){
    await runSlotsGeneration(input)
}