import express, { Router } from "express";
//import {} desde el controller

const routerUsers: Router = express.Router();

routerUsers.get('/', /*nombre*/);

export { routerUsers };