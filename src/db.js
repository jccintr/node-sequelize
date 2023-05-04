import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const db = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {  host: 'localhost', dialect: 'postgres' }
    );
