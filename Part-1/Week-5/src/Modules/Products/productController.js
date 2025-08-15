import db_connection from "../../../DB/connection.js";



export const addProduct = (req, res, next) => {
    const { title, price, added_by }  = req.body;

    if(!title || !price) {
        return res.json({ message: 'Title and price are required' });
    }


    const insertQuery = `INSERT INTO products (title, price, added_by) 
                        VALUES ('${title}', '${price}', '${added_by}')`;

    db_connection.query(insertQuery, (error, result) => {
       if(error){
            return res.json({message: 'Query Error', error: error.message});
       }
        if(result.affectedRows === 0) {
            return res.json({ message: 'Product Added failed' });
        }

        return res.json({
            message: `Product added successfully with ID: ${result.insertId}`
        });
    });



}


export const getProducts = (req, res, next) => {
    const { orderKey, arrange } = req.query;
    const selectQuery = `SELECT * FROM products ORDER BY ${orderKey} ${arrange}`;


    db_connection.query(selectQuery, (error, result) => {
        if(error){
            return res.json({ message: 'Query Error', error: error.message });
        }


        if(result.length === 0) {
            return res.json({ message: 'No products found' });
        }

        return res.json({
            message: 'Products retrieved successfully',
            products: result
        });
    });
}


export const getProductById = (req, res, next) => {
    const { id }  = req.query;
    const selectQuery = `SELECT product.id, product.title, product.price, user.name  
                        FROM products as product INNER JOIN users as user 
                        ON product.added_by = user.id
                        WHERE product.id = ${id}`
                    ;



    db_connection.query(selectQuery, (error, result) => {
        if(error){
            return res.json({ message: 'Query Error', error: error.message });
        }


        if(result.length === 0) {
            return res.json({ message: 'No products found' });
        }

        return res.json({
            message: 'Products retrieved successfully',
            products: result
        });
    });
}