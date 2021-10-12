// var http = require('http'); // Import Node.js core module
// var fs = require('fs');
import http from 'http';
import fs from 'fs';

const PORT=7777;    //<=== http port 7777

fs.readFile('./test.html', function (err, html) {
// fs.readFile('./getPatient_read.html', function (err, html) {
    if (err) throw err;

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);
});

console.log('Node.js web server at port 7777 is running..')

// var server = http.createServer(function (req, res) {   //create web server
//     if (req.url == '/') { //check the URL of the current request
//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         // set response content
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
//     }
//     else if (req.url == "/patient") {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>This is patient Page.</p></body></html>');
//         res.end();
//     }
//     else if (req.url == "/admin") {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>This is admin Page.</p></body></html>');
//         res.end();
//     }
//     else
//         res.end('Invalid Request!');
// });
//
// server.listen(7777); //6 - listen for any incoming requests


