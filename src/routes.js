import { Router } from "express";
import * as PrestadorController from './controllers/PrestadorController.js';
import * as FileController from './controllers/FileController.js';
import multer from "multer";


/*
const storage = multer.diskStorage({
   destination: (req,file,cb)=>{
     cb(null,'./tmp');
   },
   filename : (req,file,cb)=>{
     let name = Math.floor(Math.random()*99999999);
     cb(null,name+Date.now()+'.png');
   }
});

const upload = multer({
  storage: storage
});
*/

const upload = multer({
  dest: './tmp',
  fileFilter: (req,file,cb) => {
    const allowed = ['image/jpg','image/png','image/jpeg'];
    cb(null,allowed.includes(file.mimetype));
  }
});
/*
const upload = multer({
  dest: './tmp'
});
*/

const router = Router();

router.get('/',(req,res)=>{
  res.send("Aplicação Node Sequelize");
});

router.get('/prestadores',PrestadorController.getAll);
router.get('/prestadores/:id',PrestadorController.getById);
router.post('/upload',upload.single('imagem'),FileController.upload);


export default router;