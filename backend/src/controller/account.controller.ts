import { Request, Response } from "express";
import Account from "../models/Account";

export const getAllAccounts = async (req: Request, resp:Response): Promise<void> =>{
    try {
        const accountAll = await Account.findAll();
        resp.json({message:"accounts", accountAll});   
    } catch (error) {
        resp.status(500).json("Error al obtener las cuentas");
    }
}

export const createAccount = async (req: Request, resp: Response): Promise<void> => { 
    try {//SALDO TOTAL DE LA CUENTA
        const { id_user, account_balance } = req.body;
        const account = await Account.create({ id_user, account_balance });
        resp.status(200).json({message: 'account_create', account});   
    } catch (error) {
        resp.status(500).json("Error al crear la cuenta");
    }  
};