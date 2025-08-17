import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";
import User from "./user.js";


const Product = sequelizeInstance.define('Product', 
    {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        'title': {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        tableName: 'products', 
        // freezeTableName: true   set same name model in small 
    }
);

User.hasMany(Product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: {
        name: 'user_id',
        allowNull: false 
    }   
});

Product.belongsTo(User, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    }
});
export default Product;