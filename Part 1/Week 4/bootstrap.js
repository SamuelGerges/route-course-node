import userRoutes from './src/routes/user.js';
import productRoutes from './src/routes/product.js';

function bootstrap(app) {
    app.use('/users', userRoutes);
    app.use('/products', productRoutes);
}


export default bootstrap;