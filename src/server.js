import express from "express";
//import path from 'path';
import dotenv from 'dotenv';
import { db } from "./db.js";
import router from "./routes.js";

dotenv.config();

const server = express();
server.use(router);

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Falha ao conectar ao banco de dados:', error);
  }

console.log('Servidor executando na porta '+ process.env.PORT);
server.listen(process.env.PORT);