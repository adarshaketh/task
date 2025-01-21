import express, { Application } from 'express';
import {connectDatabase} from './db';
import { checkRequirments, getDEVPort } from './helpers/env';
const app: Application = express();

app.use(express.json());

app.listen(getDEVPort(), () => {
    console.log(`Server is running on http://localhost:${getDEVPort()}`);
  });

  (() => {
    if (checkRequirments()) {
        console.log("Critical Information in ENV is missing, fix it ASAP");
        process.exit(1);
    }
})();

connectDatabase();

export default app;