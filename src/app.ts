import express, { Application } from 'express';
import dotenv from 'dotenv';
import {connectDatabase} from './db';
import { checkRequirments } from './helpers/env';
const app: Application = express();

dotenv.config()
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });

  (() => {
    if (checkRequirments()) {
        console.log("Critical Information in ENV is missing, fix it ASAP");
        process.exit(1);
    }
})();

connectDatabase();

export default app;