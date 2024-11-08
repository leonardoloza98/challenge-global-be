import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes';

const app: Express = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

export default app;