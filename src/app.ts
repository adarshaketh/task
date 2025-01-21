import express, { Application } from 'express';
import dotenv from 'dotenv';
import {connectDatabase} from './db';
const app: Application = express();

dotenv.config()
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });

connectDatabase();

export default app;