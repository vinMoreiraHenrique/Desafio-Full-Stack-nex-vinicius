import { Request, Response } from "express";
import authenticateUser from "../models/Login";

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const loginUser = await authenticateUser({ email, password });
    console.log(loginUser);
    return res.status(200).json(loginUser);
  } catch (err){
    if (err instanceof Error) {
      return res.status(403).json({ message: "Invalid email or password" });
    }
    res.status(401).json({ message: "Usuário ou senha incorretos" });
  }
};

export default loginController;
