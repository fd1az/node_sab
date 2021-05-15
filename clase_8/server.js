import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import { Post } from './routes/Post.js';

const server = express();

const PORT = process.env.PORT || 3000;

//Load ENV vars

dotenv.config();

//ConnectDb

connectDB();

server.use(express.json());

server.use('/post', Post);
server.get('/', (req, res) => {
  res.json({ message: 'Deberias iniciar los request en /api/<entidad>' });
});

server.listen(PORT, () => {
  console.log(`Sevidor en http://localhost:${PORT}`);
});
