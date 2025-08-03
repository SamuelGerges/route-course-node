const http = require('http');

const users = [
    { id:1, name: 'John', age: 30 },
    { id:2, name: 'Jane', age: 25 },
    { id:3, name: 'Doe', age: 40 }
];

const server = http.createServer((req, res) => {
    // this is destructuring the request object
    let { url, method } = req;  

    if(url === '/users' && method === 'GET'){
            res.end(JSON.stringify(users));
    }else if(url === '/users' && method === 'POST'){
        req.on('data', (chunk) => {
            let data = JSON.parse(chunk);
            data.id = users.length + 1; 
            users.push(data);
            res.statusCode = 201; // Created
            res.end(JSON.stringify(users));
        });
    }else if(url.startsWith('/users/') && method === 'PATCH'){
        const id = url.split('/')[2];
        const index = users.findIndex(element => element.id === parseInt(id));
        console.log(index);
        req.on('data', (chunk) => {
            if(index == -1){
                res.statusCode = 404; // Not Found
                res.end(JSON.stringify({'message': 'User not found'}));
                return;
            }
            let {name,age} = JSON.parse(chunk);
            users[index].name = name;
            users[index].age = age;
            res.statusCode = 201; // OK
            res.end(JSON.stringify(users));

        });
    }
    else if(url.startsWith('/users/') && method === 'DELETE'){
        const id = url.split('/')[2];
        const index = users.findIndex(element => element.id === parseInt(id));
         if(index == -1){
            res.statusCode = 404; // Not Found
            res.end(JSON.stringify({'message': 'User not found'}));
            return;
        }

        users.splice(index, 1);
        let statusCode = res.statusCode = 201; 
        let responseMessage = {
            message: 'User deleted successfully',
            status: statusCode,
            users: users
        };
        res.end(JSON.stringify(responseMessage));
    }else{
        res.end(JSON.stringify({'message': 'Not Found'}));
    }
});


server.listen(5000, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    }else{
        console.log('Server is listening on port 5000');
    }

});