import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.PORT ||"8000", 10);//10 es la base numérica

app.get("/", (req: Request, res: Response): void => {
  res.send('Sistema bancario');
});

app.listen(port, (): void => {
  console.log('SERVER IS UP ON PORT:', port);
})



