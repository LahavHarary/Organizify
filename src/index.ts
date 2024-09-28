import express from 'express';
import mongoose from 'mongoose';
import documentationRoutes from './routes/documentationRoutes';
import logger from './middleware/logger';
import cors from 'cors'; // Import CORS

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection settings
const mongoURI = 'mongodb://localhost:27017/myproject';

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(logger);
app.use(express.json());

// Routes
app.use('/api', documentationRoutes);

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {})
.then(() => {
  console.log('Connected to MongoDB');

  // Start the Express server once connected to MongoDB
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
