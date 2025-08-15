// establish a connection to the database

import mysql2 from 'mysql2';

const db_connection = mysql2.createConnection({
    host: 'localhost',
    database: 'online_shopping_node_js',
    user: 'root',
    password: 'Root@root123'
});


db_connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database successfully');
});


export default db_connection;
