import sharp from "sharp";

export const upload = async (req,res) => {

    if(req.file){
        res.status(200);
        req.json({});

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