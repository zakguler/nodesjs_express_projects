let express = require('express');
let path = require('path');
let fs = require('fs');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get('/profile-picture', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

const mongo_db_username = process.env.MONGO_DB_USERNAME;
const mongo_db_pwd = process.env.MONGO_DB_PWD;
console.log(`z_process.env.MONGO_DB_USERNAME: ${mongo_db_username}`);
console.log(`z_process.env.MONGO_DB_PWD: ${mongo_db_pwd}`);

//***
//*** change these lines to run it locally or thru the docker containers
//***
// use when starting application locally/@localhost / @mongodb inside the same docker network [container-to-container]
let mongoUrlLocal = "mongodb://admin:password@localhost:27017";  // app is local and outside of the docker network
//let mongoUrlLocal = "mongodb://admin:password@mongodb:27017";     // app is inside the docker network, together with mongodb and mongo-express
//let mongoUrlLocal = "mongodb://admin:password@mongodb"; // same as @mongodb:27017

// for now, this line is not used.
// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin:password@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
// let databaseName = "my-db";
let databaseName = "user-account";

app.post('/update-profile', function (req, res) {
  let userObj = req.body;

  MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);
    userObj['userid'] = 1;

    let myquery = { userid: 1 };
    let newvalues = { $set: userObj };

    db.collection("users").updateOne(myquery, newvalues, {upsert: true}, function(err, res) {
      if (err) throw err;
      client.close();
    });

  });
  // Send response
  res.send(userObj);
});

app.get('/get-profile', function (req, res) {
  let response = {};
  // Connect to the db
  MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);

    let myquery = { userid: 1 };

    db.collection("users").findOne(myquery, function (err, result) {
      if (err) throw err;
      response = result;
      client.close();

      // Send response
      res.send(response ? response : {});
    });
  });
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
