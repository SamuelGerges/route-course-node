import db_connection from "../../../DB/connection.js";



export const addComment = (req, res, next) => {
    const {content, rate, product_id, added_by} = req.body;

    if (!content || !rate || !product_id || !added_by) {
        return res.status(400).json({ message: "All fields are required" });
    }

       // Ensure rate is between 1 and 5
    if (rate < 1 || rate > 5) {
        return res.status(400).json({ message: "Rate must be between 1 and 5" });
    }
    
 

    const insertQuery = `
        INSERT INTO comments (content, rate, product_id, added_by) 
        VALUES ('${content}', '${rate}', '${product_id}','${added_by}')
    `;

    db_connection.query(insertQuery, (error, result) => {
        if(error){
            return res.status(500).json({ message: "Query Error", error: error.message });
        }
     
        if (result.affectedRows === 0) {
            return res.status(500).json({ message: "Comment addition failed" });
        }


        return res.status(201).json({
            message: `Comment added successfully with ID: ${result.insertId}`
        });
    });
}


export const getCommentById = (req, res, next) => {
    const { id } = req.query;
    console.log(req.query);
    
    const selectQuery = `
        SELECT comment.id, comment.content, comment.rate, 
        product.title as product_title, 
        product.price as product_price,
        user.name as user_name
        FROM comments as comment 
        INNER JOIN products as product ON comment.product_id = product.id
        INNER JOIN users as user ON comment.added_by = user.id
        WHERE comment.id = ${id}
        `;

    db_connection.query(selectQuery, (error, result) => {
        if(error){
            return res.status(500).json({ message: "Query Error", error: error.message });
        }

        if(result.length === 0){
            return res.status(404).json({ message: "Comment not found" });
        }

        return res.status(200).json({
            message: "Comment retrieved successfully",
            comment: result
        });
    });

} 