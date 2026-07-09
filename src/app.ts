import express, { Express } from "express";
import { routeNotFound } from "./middlewares/route-not-found.js";
import { errorHandler } from "./middlewares/error-handler.js";
import userRouter from "./routers/user.router.js";
import { availabilityRouter } from "./routers/availability.router.js";
import { eventTypeRouter } from "./routers/event-type.router.js";
import { publicEventRouter } from "./routers/pubic-event-type.router.js";




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


// Express router based routes
app.use('/api/users', userRouter); // if the route starts with /users, userRouter will handle it
app.use('/api/availability', availabilityRouter);
app.use('/api/event-types', eventTypeRouter);
app.use('/api/public', publicEventRouter);


app.use(routeNotFound);
app.use(errorHandler);// at the last we mention our error handling middleware


export { app }