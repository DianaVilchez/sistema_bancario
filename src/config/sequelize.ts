const { Sequelize } = require('sequelize');
import dotenv from 'dotenv';
dotenv.config();
// Configura la conexión a la base de datos
export const sequelize = new Sequelize(process.env.DATABASE,process.env.USER ,process.env.PASSWORD, {
    host: 'localhost', 
    dialect: 'postgres', 
    logging: false
});


