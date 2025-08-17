// establish a connection to the database

import { Sequelize} from 'sequelize';

export const sequelizeInstance = new Sequelize('online_shopping2_node_js', 'root', 'Root@root123', {
    host: 'localhost',
    dialect: 'mysql'
});


const testConnection = async () => {
    try{
        await sequelizeInstance.authenticate();
        console.log('Test Connection to the database has been established successfully.');
    }
    catch (error){
        console.error('Unable to connect to the database:', error);
    }
}


export const dbConnection = async () => {
    try{
        await sequelizeInstance.sync({alter: true, force: false});
        console.log('Connection to the database has been established successfully.');
    }
    catch (error){
        console.error('Unable to connect to the database:', error);
    }
}



