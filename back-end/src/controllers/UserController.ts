import { Request, Response } from "express";
import User from "../models/User";
import Product from "../models/Products";

async function createUserController(req: Request, res: Response) {
  const { name, email, password } = req.body;
  
  try {
    console.log(name);
    const createdUser = await User.create({ name, email, password });

    res.status(201).json(createdUser);
  } catch (error) {
    console.error("Erro ao criar o usuário", error);
    res.status(500).json({ message: "Erro ao criar o usuário" });
  }
}

export default createUserController;
