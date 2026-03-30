import { pinoHttp } from 'pino-http';
import express, { Request, Response } from 'express';
import cors from "cors";
import router from "./routes";

const logger = pinoHttp();
const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: any, res: any) => {
  res.json({ message: 'Born to Serve Group API' });
});

app.use("/api", router);

app.use((req: any, res: any, next: any) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;
