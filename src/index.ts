import express from 'express';
import mongoose from 'mongoose';
import documentationRoutes from './routes/documentationRoutes';
import logger from './middleware/logger';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger);
app.use(express.json());

// Routes
app.use('/api', documentationRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });
