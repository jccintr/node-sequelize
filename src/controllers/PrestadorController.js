import { Prestador } from "../models/Prestador.js";

export const getAll = async (req,res) => {
    
    let prestadores = await Prestador.findAll();
    res.status(200).json(prestadores);

};

export const getById = async (req,res) => {

    let id = req.params.id;
    let prestador = await Prestador.findByPk(id);
    if(prestador)
      res.status(200).json(prestador);
    else
      res.status(404).json({msg: 'Prestador não encontrado'});

};
