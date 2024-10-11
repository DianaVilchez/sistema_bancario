import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//IMPORTAR LOS MODELOS
import User from "../models/User";

const createHashValue = async(value:string) =>{
  const salt = await bcrypt.genSalt();
  return await bcrypt.hashSync(value, salt)
}

const isValidPassword = async (psw: string, encrypted: string) =>{
  return await bcrypt.compareSync(psw, encrypted);
}

export const registerUser = async(req:Request, resp:Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const hashedpsw = await createHashValue(password);
    const newUser = await User.create({
      username,
      password: hashedpsw
    });   
    resp.status(200).json({message:"create", newUser});
  } catch (error) {
    resp.status(500).json("ERROR")
    
  }
}

// export const loginUser = async(req:Request, resp:Response): Promise<void> => {
//   try {  
//     const users = await User.findAll()
//     console.log(users) 
//     resp.json({message:"login", users });
//   } catch (error) {
//     resp.status(500).json("ERROR")
//   }
// }

export const loginUser = async (req: Request, resp: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      resp.status(400).json("User y password son obligatorios");
    }
    const user = await User.findOne({ where: { username: username } });
    if (user === null || !user) {
      resp.status(400).json("Usuario no encontrado o incorrecto");
    }
    let comparePassword;
    if(user){
      comparePassword = await isValidPassword(password, user?.password)
      console.log("🚀 ~ loginUser ~ comparePassword:", comparePassword)    
    }
    if(!comparePassword){
      resp.status(400).json("Contraseña invalida");
    }
    const token = jwt.sign({name: username}, "SECRET");
    console.log("🚀 ~ loginUser ~ token:", token)
    resp.status(200).json({token});
  } catch (error) {
    resp.status(500).json("ERROR");
  }
}
