import express, { Router } from "express";
import { getUser } from "../controller/users.controller";

const routerUsers: Router = express.Router();

routerUsers.get('/', getUser);

export { routerUsers };