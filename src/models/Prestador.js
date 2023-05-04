import { DataTypes } from "sequelize";
import { db } from "../db.js";


export const Prestador = db.define('Prestador',{
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
   },
   endereco: {
    type: DataTypes.STRING,
    allowNull: true
   },
   bairro: {
    type: DataTypes.STRING,
    allowNull: true
   },
   contato: {
    type: DataTypes.STRING,
    allowNull: true
   },
   telefone: {
    type: DataTypes.STRING,
    allowNull: true
   },
}, {
    tableName: 'prestadores',
    timestamps: false
});