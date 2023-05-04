import { Prestador } from "../models/Prestador.js";

export const getAll = async (req,res) => {
    
    let prestadores = await Prestador.findAll();
    res.send(prestadores);

};