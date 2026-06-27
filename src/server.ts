import { connectDatabase } from "./config/database.js";

async function startServer() {
    await connectDatabase();
}


startServer().catch((err) => {
    console.error('[Server]: Failed to start', err);
    process.exit(1);
})