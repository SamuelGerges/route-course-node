// return the express function as a variable
// Create an instance of the express application
// Set the port for the server to listen on

const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.json()); // Middleware to parse URL-encoded bodies to json

const port = 3000;

const users = [
    {
        id: 1,
        name: 'Samuel',
        age: 25,
    }
]


app.get('/', (req, res, next) => {
    // __dirname is the directory name of the current module == path.resolve() to use in any operating system
    // res.sendFile(path.resolve(path.join(path.resolve(), 'index.html')));
    res.status(200).json(users)

});


app.post('/', (req, res, next) => {

    req.body.id  = users.length + 1; // Assign a new ID based on the current length of the users array{
    let bodyData = req.body ;

    if(!bodyData.name || !bodyData.age){
        return res.status(400).json({ error: 'Name and age are required' });
    }
     users.push(bodyData);

     res.status(201).json({
        message: 'User added successfully',
        user: bodyData
    });
});

app.patch('/:id', (req, res, next) => {
    const { id } = req.params;
    const {name, age } = req.body;

    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    console.log([name, age]);


    if (name) {
        users[index].name = name;
    }
    if (age) {
        users[index].age = age;
    }
    res.status(200).json({
        message: 'User updated successfully',
        user: users[index]  
    });

});


app.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users.splice(index, 1);
    res.status(200).json({
        message: 'User deleted successfully',
        users: users    
    });
});


app.all('*', (req, res, next) => {
    res.status(404).json({
        message: 'not found'
    });
});

app.listen(port, (error) => {
    if(error){
        console.log(`Error starting server: ${error}`);
        return ;
        
    }
    console.log(`Server is running on http://localhost:${port}`);
});