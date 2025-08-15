// ES 5 
// const data = require('./demo.js');

// const { x, y } = data;

// console.log(data);
// var z = data.sum(x,y);

// console.log(x,y); // This will log the last assigned value, which is 20
// console.log(z); // This will log the sum of x and y



// ES 6

// import {x,y, sum} from './demo.js';
// console.log(x,y,sum(x,y)); // This will log the values of x, y and their sum

import express from 'express';
import bootstrap from './bootstrap.js';
// import { userRoutes } from './src/routes/user.js';
// import { productRoutes } from './src/routes/product.js';

const app = express();
const port = 3000;

app.use(express.json());

// userRoutes(app);
// productRoutes(app);
bootstrap(app);


app.get('/', (req, res, next) => {
    console.log('Hello World');
});

app.listen(port, (error) => {
    if(error){
        console.error('Error starting server:', error);
        return;
    }
    console.log(`Server is running on http://localhost:${port}`);
});



