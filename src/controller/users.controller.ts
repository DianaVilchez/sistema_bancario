import { Request, Response } from "express";

export const getUser = async (req: Request, resp: Response): Promise<void> => {
    try {
      resp.json();
    } catch (error) {
      resp.status(500).json("ERROR");    
    }
};