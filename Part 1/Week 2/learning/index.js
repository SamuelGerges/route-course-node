// ES 5 

// type : modules 

// local module 
// third party module

// built-in module
    // 1- module os'use strict';

    const os = require('os');

    console.log(os.freemem());
    console.log(os.arch());


    // 2- module fs 
    const fs = require('fs');
    const { log } = require('console');

    // readFileSync
    // writeFileSync
    // appendFileSync
    // mkdirSync
    // unlinkSync
    // existsSync
    // mkdtempSync

    fs.writeFileSync('./test.txt', 'Samuel Gerges \n i am software developer \n i i am 26 years old');
    console.log('x');
    const data = fs.readFileSync('./test.txt', 'utf8');

    console.log(data);
    console.log('txtxxttxx');

    fs.readFile('./test.txt', 'utf-8', (err, data) => {
        if(err){
            console.log('Error reading file:', err);
        }

        console.log(data);
    });

    // http module
    const http = require('http');
    const server = http.createServer((req, res) => {
        res.end('Hello, World!');
    });


    server.listen(5000, (err) => {
        if (err) {
            console.error('Error starting server:', err);
            return ;

        }else{
        console.log('Server is listening on port 5000');
        }

    });

