const { log } = require("console");
const express = require("express");  // this return function express 
const fs = require('fs');

const path = require('path');

const app = express();

const port = 3000;
app.use(express.urlencoded({ extended: true })); // for HTML form data


const users = [
    {
        id:1,
        name: "John Doe",
    }
];


app.get("/", (req, res) => {
    res.json({
        message: "fetching data from the server",
        status: "success",
        users: users
    });
    res.end();
});


// Serve HTML form
app.get('/add-user', (req, res) => {
    const filePath = path.join(__dirname, 'form.html');
    const html = fs.readFileSync(filePath, 'utf-8');
    res.send(html);
    res.end();
});


app.post("/users", (req, res) => {
    console.log("Received user data:", req.body);

   const { name } = req.body;
    if (!name) {
        return res.status(400).send('Name is required');
    }
    const newUser = {
        id: users.length + 1,
        name: name,
    };
    users.push(newUser);
    res.status(201);
    res.redirect('/');
});




app.listen(port, (error) => {
    if(error){
        console.error("Error starting the server:", error);
        return;
    }

    console.log(`Server is running on http://localhost:${port}`);
});
