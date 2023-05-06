import sharp from "sharp";
import {unlink} from 'fs/promises';

export const upload = async (req,res) => {

    if(req.file){
        await sharp(req.file.path)
        .toFormat('png')
        .toFile(`./public/imagens/${req.file.filename}.png`);
        
        await unlink(req.file.path);

        res.json({msg: 'upload concluido'});

    } else {
        res.status(400);
        res.json({error: 'erro de envio'});
    }

    //console.log(req.file);
    //console.log(req.body);
    //const {text} = req.body;
   // let text = req.body.text;
  //  console.log(text);
    
   // res.send('rota de upload');

};