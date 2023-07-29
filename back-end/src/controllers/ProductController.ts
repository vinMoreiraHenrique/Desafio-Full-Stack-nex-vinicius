import { Request, Response } from 'express';
import Product from '../models/Products';


const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, userId } = req.body;

    const newProduct = await Product.create({
      name,
      price,
      userId,
    });

    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

export default createProduct;
