import { Request, Response } from 'express';
import Documentation from '../models/documentationModel';
import generateDocumentation from '../services/gptService'


const getDocumentation = async (req: Request, res: Response) => {
  Documentation.find({})
  .then(docs => {
    return res.status(200).send(docs);
  })
  .catch(err => {
    console.error('Error finding documents:', err);
    return res.status(500).send("Internal Server Error");
  });
};

export const postDocumentation = async (req: Request, res: Response) => {
  const newDoc = new Documentation({
    title: req.body.title,
    user_name: req.body.user_name,
    description: generateDocumentation(req.body.description),
  });

  newDoc.save()
  .then(doc => {
    return res.status(200).send(doc);
  })
  .catch(err => {
    return res.status(400).send("Bad Request");
  });

}

export default { getDocumentation, postDocumentation };