//https://ilovecoding.org/courses/nodejs/lessons/creating-a-simple-web-app-with-nodejs
//https://www.tabnine.com/code/javascript/functions/http/ServerResponse/writeHead

var http = require('http');
var url = require('url')

var show = require('./show4');


http.createServer(onRequest).listen(7777);

// terminal> node webapp <== to start the server
console.log('Server has started');

function onRequest(request, response){
    //localhost:777/mypath
    //???console.log('url: ' + url.parse(request.url));
    var pathName = url.parse(request.url).pathname

    console.log('z_url..pathname: ' + pathName);
    console.log('z_request.method: ' + request.method);

    // var params = url.parse(request.url, true).query;

    show.showPage(response, pathName)
}





