import { Request, Response } from 'express';
import Documentaion from '../models/documentationModel';

const getDocumentation = async (req: Request, res: Response) => {
  try {
    const users = await Documentaion.find();
    res.json(users);
  } catch (error) {
    let errorMsg = 'An unknown error occurred'
    if (error instanceof Error)
    {
      errorMsg = error.message;
    }
      
    res.status(500).json({ error: errorMsg });
  }
};

export default { getDocumentation };