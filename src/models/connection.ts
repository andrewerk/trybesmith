import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASSWORD,
  user: process.env.MYSQL_USER,
});

export default connection;
