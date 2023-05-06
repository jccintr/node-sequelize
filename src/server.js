import express  from "express";
//import  ErrorRequestHandler  from "express";
import path from 'path';
import dotenv from 'dotenv';
//import cors from 'cors';
import { db } from "./db.js";
import router from "./routes.js";
import { MulterError } from "multer";

const __dirname = path.resolve();

dotenv.config();

const server = express();

//server.use(cors());

//server.use(express.urlencoded({extended: true}));

server.use(router);

server.use((req,res)=>{
  res.status(404);
  res.json({error: 'Não encontrado'});
});
/*
const errorHandler = (err,req,res,next) => {
    res.status(500); // bad request
    
    if(err instanceof MulterError){
      res.json({error: err.code});
    } else {
       console.log(err);
       res.json({error: 'Ocorreu um erro fatal.'});
    }

}
*/
server.use((err,req,res,next) => {
  res.status(500); // bad request
  
  if(err instanceof MulterError){
    res.json({error: err.code});
  } else {
     console.log(err);
     res.json({error: 'Ocorreu um erro fatal.'});
  }

});

//server.use(errorHandler);

try {
    await db.authenticate();
    console.log('Conectado ao servidor de dados.');
} catch (error) {
    console.error('Falha ao conectar ao banco de dados:', error); 
  }


server.listen(process.env.PORT,()=>console.log('Servidor executando na porta '+ process.env.PORT));