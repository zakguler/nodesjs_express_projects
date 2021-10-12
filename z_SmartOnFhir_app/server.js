//
import express from 'express'; // type:module to use 'import' in javascript code
import bodyParser from "body-parser";

// temp solution till I know more about the __dirname
import path from 'path';
const __dirname = path.resolve(path.dirname('./'));

//import usersRoutes from "../z_rework_EX_2/routes/users";
//import usersRoutes from './routes/users.js';


const server = express();
const PORT = 5000;

server.use(bodyParser.json());
// server.use('/users', usersRoutes);


// Express Middleware for serving static files
server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req, res) => {
    // res.sendFile(__dirname + "/index.html");
    // res.sendFile(__dirname + "/getPatient_read.html");
    res.sendFile(__dirname + "/x_listAll.html");
});

server.get("/x_getPatient.html", (req, res) => {
    // const id = req.query.id;
    const id = req.param("id");
    console.log("z_param/query: " + id);
    const prm = {'id': '1234', 'wewe':'yes'};
    // displayAllParams(req.params);
    // res.sendFile(__dirname + "/x_getPatient.html");
   res.sendFile(__dirname + "/x_getPatient.html", prm);
});


server.listen(PORT, () =>console.log(`z_Server running on port: http://localhost:${PORT}`));

function displayAllParams(params){
    params.forEach((param, index) => {
        //This checks each key-value pair, in the format key=value, for the specific id key we want
        var key = param.split("=")[0]; //In id=123, this would be "id"
        var value = param.split("=")[1]; //In id=123, this would be "123" (as a String)
        console.log(key + ":" + value);
    });
}





//=============================================
//=============================================
//=============================================

// req.params
// req.body
// req.query


// res.sendFile()

// res.json("Hello Express");

// res.send()
// server.get('/', (req, res) => {
//     res.send('Hello from Homepage.')
// });

// res.redirect()
// server.get('/', function(req, res) {
//      res.redirect('getPatient_read.html');
// });

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Without middleware
// server.get('/', function(req, res){
//     var options = {
//         root: path.join(__dirname)
//     };
//
//     var fileName = 'Hello.txt';
//     res.sendFile(fileName, options, function (err) {
//         if (err) {
//             next(err);
//         } else {
//             console.log('Sent:', fileName);
//         }
//     });
// });
