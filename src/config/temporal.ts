import { Client, Connection } from "@temporalio/client";
import { TEMPORAL_ADDRESS } from "./env.js";

let client: Client | null = null;

export async function getTemporalClient(){
    
    if(client){
        return client;
    }
    
    const connection = await Connection.connect({address: TEMPORAL_ADDRESS});
    client = new Client({connection});

    return client;
    
}

export async function disconnectTemporal(){
    if(client){
        await client.connection.close();
        client = null;
    }
}