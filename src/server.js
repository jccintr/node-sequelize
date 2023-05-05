import express from "express";
//import path from 'path';
import dotenv from 'dotenv';
import { db } from "./db.js";
import router from "./routes.js";

dotenv.config();

const server = express();
server.use(router);

server.use((req,res)=>{
  res.status(404);
  res.json({error: 'Não encontrado'});
});

try {
    await db.authenticate();
    console.log('Conectado ao servidor de dados.');
} catch (error) {
    console.error('Falha ao conectar ao banco de dados:', error); 
  }

console.log('Servidor executando na porta '+ process.env.PORT);
server.listen(process.env.PORT);