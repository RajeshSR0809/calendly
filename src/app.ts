import express, { Express } from "express";
import { routeNotFound } from "./middlewares/route-not-found.js";
import { errorHandler } from "./middlewares/error-handler.js";



const app: Express = express();
app.use(express.json()); // this will help express to deserialize the request body (JSON) into a JavaScript object
app.use(express.text());
app.use(express.urlencoded());

// Custom routes
app.get('/health', (_req, res) => {
    console.log("Executed health route");
    res.json({
        status: 'ok!',
        timestamp: new Date().toISOString()
    })

});


app.use(routeNotFound);
app.use(errorHandler);// at the last we mention our error handling middleware


export { app }