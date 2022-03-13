import express from 'express';
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');  //<=== for html views - views engine

// point to the static directory, in this case, it is the 'public' folder
// EX: http://localhost:3000/test/tt.html
app.use(express.static("public"));
app.use(express.json());    //<=== for json request processing from the body
app.use(express.urlencoded({ extended: true }));

// mdlware_3 will only run with the app.get('/'..) three times
// it is specific for this function
// also, it does not need to use 'app.use(mdlware_3)
// NOTE: if you define this mdlware_3 in the user.js file, it will only work for '/users..' calls
//
// this code does not see the 'logger' middleware
// app.get('/', (req,res)=> {
app.get('/', mdlware_3, mdlware_3, mdlware_3, (req,res)=> {
    console.log("Hi");
    // res.status(200).send('z_GET ... ' );
    res.render("index", {"text": "World"}) //<=== default views location: /views/index.ejs
})


//==========================================================================
// middleware 'logger' gets used anywhere below the [app.use(logger]
// any router call above this will not use because the code gets executed top-down
app.use(logger);
//==========================================================================


import usersRouter from './routes/users.js';	//<=== require/import this file
app.use('/users', usersRouter) //<=== link a route to a particular path

// import accountsRouter from './routes/accounts.js';	//<=== require/import this file
// app.use('/accounts', accountsRouter) //<=== link a route to a particular path


//---middleware example_2
function logger(req, res, next) {
    console.log("z_middleware_2 logger: " + req.originalUrl)
    next()
}

//---middleware example_3
function mdlware_3(req, res, next) {
    console.log("z_mdlware_3 logger: " + req.originalUrl)
    next()
}


app.listen(PORT, () =>console.log(`z_Server running on port: http://localhost:${PORT}`));
