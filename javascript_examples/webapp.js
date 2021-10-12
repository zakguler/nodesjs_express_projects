//https://ilovecoding.org/courses/nodejs/lessons/creating-a-simple-web-app-with-nodejs

var http = require('http');
var url = require('url')

http.createServer(onRequest).listen(7777);

// terminal> node webapp <== to start the server
console.log('Server has started');

function onRequest(request, response){
    //localhost:777/mypath
    var pathName = url.parse(request.url).pathname
    console.log('pathname' + pathName);
    response.writeHead(200);
    response.write('Hello Noders');
    response.end();
}


