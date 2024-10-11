import express, { Router} from 'express'
import { getAllAccounts, createAccount } from '../controller/account.controller';

const routerAccount = express.Router();

routerAccount.get('/', getAllAccounts);
routerAccount.post('/', createAccount);

export { routerAccount };