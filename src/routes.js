import { Router } from "express";
import * as PrestadorController from './controllers/PrestadorController.js'



const router = Router();

router.get('/',(req,res)=>{
  res.send("Aplicação Node Sequelize");
});

router.get('/prestadores',PrestadorController.getAll);


export default router;