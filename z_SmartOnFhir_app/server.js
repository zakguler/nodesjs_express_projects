//remove all temp-testing code
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

    console.log("z_req.originalUrl: " + req.originalUrl);
    console.log("z_req.hostname: " + req.hostname);

    // list al parameters in the url query
    for (const key in req.query) {
        console.log("...z_key/value: " + key, req.query[key])
    }

    req.query.id = "x9999";

    const { id } = req.query;  //==> { id: 2 }
    // const id = req.query.id;
    // const { id } = req.params;  //==> { id: 2 }
    // const id = req.param("id"); <=== deprecated
    console.log("z_param/query: " + id);

    res.sendFile(__dirname + "/x_getPatient.html");
    // res.redirect('/extra.html?id=z9999&hi=you');

 });



server.listen(PORT, () =>console.log(`z_Server running on port: http://localhost:${PORT}`));





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
