import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();

if (!process.env.DATABASE || !process.env.DB_PASSWORD || !process.env.DB_HOST) {
    throw new Error('Las variables de entorno para la base de datos no están definidas');
}

// Configura la conexión a la base de datos
export const sequelize = new Sequelize(process.env.DATABASE, 'postgres', process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,  // O cambia esto si es necesario
  dialect: 'postgres', // Usa PostgreSQL como dialecto
  logging: false      // Desactiva el logging de las consultas SQL
});



/*
export const sequelize: Sequelize = new Sequelize(process.env.DATABASE || '', 'postgres', process.env.DB_PASSWORD || '', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  logging: false 
});

*/