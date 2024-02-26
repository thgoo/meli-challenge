import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './routes/api';

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();
app.use(cors());

app.use('/api', apiRouter);

app.get('*', function (req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: '404 Not Found',
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${HOSTNAME}:${PORT}`);
});
