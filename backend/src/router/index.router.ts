import express, { Application, Router} from "express";
import { routerUsers } from "./users.router";
import { routerAccount } from "./account.router";

function router(app:Application): void {
    const routes: Router = express.Router();
    app.use('/api/', routes);
    routes.use('/users', routerUsers);
    routes.use('/account', routerAccount);  
};

export {router};