import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";


const User = sequelizeInstance.define('', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM('male', 'female'),
            allowNull: true,
            defaultValue: 'male'
        }
    },
    {
        timestamps: true,
        tableName: 'users',
    }
);



export default User;