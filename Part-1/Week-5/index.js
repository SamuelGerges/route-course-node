import express from 'express';
import db_connection from './DB/connection.js';
import userRoute from './src/Modules/Users/userRoute.js';
import productRoute from './src/Modules/Products/productRoute.js';
import commentRoute from './src/Modules/Comments/commentRoute.js';


const app = express();
const PORT = 3000;

app.use(express.json());
// connection to the database
db_connection


app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/comments', commentRoute);



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, (error) => {
    if(error) {
        console.error('Error starting the server:', error);
        return;
    }     
    console.log(`Server is running on http://localhost:${PORT}`);
});




