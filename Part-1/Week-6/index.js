import express from 'express';
import { dbConnection }  from './DB/connection.js';
import User from './DB/Models/user.js';
import Product from './DB/Models/product.js';
import userRoute from './src/Modules/User/userRouter.js';

const app = express();
const PORT = 3000;
app.use(express.json());

dbConnection();
User;
Product;

app.use('/users', userRoute);
app.get('/', (req, res) => {
    res.send('Welcome to the Online Shopping API');
});


app.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});




