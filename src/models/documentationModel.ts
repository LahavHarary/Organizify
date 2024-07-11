import { Schema, model } from 'mongoose';

const documentationSchema = new Schema({
    title: { type: String, required: true },
    user_name: { type: String, required: true},
    description: { type: String, required: true},
  });
  
  const Documentation = model('documentation', documentationSchema);
  
  export default Documentation;