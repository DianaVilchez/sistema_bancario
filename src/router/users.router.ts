import express, { Router } from "express";
// import { getUser } from "../controller/users.controller";

import { registerUser, loginUser } from "../controller/users.controller";

const routerUsers: Router = express.Router();

routerUsers.get('/login', loginUser)
routerUsers.get('/create', registerUser);

export { routerUsers };