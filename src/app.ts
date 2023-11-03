import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes/v1/routes';
import { connectDB } from './db';

// Load environment variables from .env file
dotenv.config(); 

// db connection
connectDB()

// constants
const app = express();
const port: String = process.env.PORT;

// parse data
app.use(express.json());

// root route
app.use('/v1/', routes)

// listen on default port
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

