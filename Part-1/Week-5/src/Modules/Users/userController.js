import db_connection from "../../../DB/connection.js";
import axios from "axios";




//  ============  add user ============

export const register = async(req, res, next) => {
    
    const { name, email, password, gender, address } = req.body;
    if(!name || !email || !password || !address || !gender) {
        return res.json({ message: 'All fields are required' });
    }   


    const isUserExisted = await axios.get(`http://localhost:3000/users/get-user-by-email?email=${email}`);

    console.log('isUserExisted', isUserExisted.data);
    
    if(isUserExisted?.data?.data) {
        return res.json({ message: 'Email already exists' });
    }

    
    const insertQuery = `INSERT INTO users (name, email, password, gender, address) 
                        VALUES ('${name}', '${email}', '${password}', '${gender}', '${address}')`;

    

    db_connection.query(insertQuery,(error, result) => {
        if(error)
        {
            return res.json({message: 'Query Error ', error: error.message});
        }

        if(result.affectedRows === 0) {
            return res.json({ message: 'User registration failed' });
        }

        return res.json({
            message: `User registered successfully with ID: ${result.insertId}`
        });
    });
}


export const getUserByEmail = (req, res, next) => {
    const { email } = req.query;

    if(!email) {
        return res.json({ message: 'Email is required' });
    }

    const selectEmailQuery = `SELECT * FROM users WHERE email = '${email}'`;

    db_connection.query(selectEmailQuery, (error, result) => {
        if(error) {
            return res.json({ message: 'Query Error ', error: error.message });
        }

        if(result.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        return res.json({ message: 'User Found', data: result[0] });
        
    });


}


export const getUsersWithComments = (req, res, next) => {
    const selectQuery = `
        SELECT * FROM users AS user
        LEFT JOIN comments AS comment ON user.id = comment.added_by
        
    `;


    db_connection.query(selectQuery, (error, result) => {
        if(error) {
            return res.json({ message: 'Query Error ', error: error.message });
        }

        if(result.length === 0) {
            return res.json({ message: 'No users found' });
        }

        return res.json({ message: 'Users with comments found', data: result });
    });
}