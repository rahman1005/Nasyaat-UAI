import { Sequelize } from "sequelize";
const db = new Sequelize('nasyaat', 'root','',{
    host:"localhost",
    dialect: "mysql"
});
export default db;