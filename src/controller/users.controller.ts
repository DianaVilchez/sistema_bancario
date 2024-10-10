import { Request, Response } from "express";

// export const getUser = async (req: Request, resp: Response): Promise<void> => {
//     try {
//       resp.json();
//     } catch (error) {
//       resp.status(500).json("ERROR");    
//     }
// };

export const registerUser = async(req:Request, resp:Response): Promise<void> => {
  try {
    resp.json("register");
  } catch (error) {
    resp.status(500).json("ERROR")
    
  }
}

export const loginUser = async(req:Request, resp:Response): Promise<void> => {
  try {   
    resp.json("login");
  } catch (error) {
    resp.status(500).json("ERROR")
    
  }
}