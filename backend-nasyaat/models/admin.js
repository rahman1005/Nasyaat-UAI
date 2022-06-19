import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;


const Admin = db.define('admin',{

    name:{
        type: DataTypes.STRING,
        allowNull:true
      },
    username:{
        type: DataTypes.STRING,
        allowNull:true
      },
    password:{
        type: DataTypes.STRING,
        allowNull:false
      },
},{
    freezeTableName:true
});

export default Admin;