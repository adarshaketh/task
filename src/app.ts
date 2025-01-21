import express, { Application } from 'express';
import dotenv from 'dotenv';
const app: Application = express();

dotenv.config()
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });