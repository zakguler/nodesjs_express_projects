import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());    //<=== for json request processing from the body
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.get('/', auth, (req,res)=> {
    console.log("z_app.get(/)... Hi");
    console.log(`z_get req.query.newVal: ${req.query.newVal}`); //<== receive this value from 'auth()' middleware
    res.send("I am in app.get");
})

//---middleware
function logger(req, res, next) {
    console.log("z_logger(): " + req.originalUrl)
    next()
}

//---middleware
function auth(req, res, next) {
    if (req.query.admin === 'true'){
        console.log("z_auth()... admin===true");
        req.query.newVal = "Sam";   //<== pass this value from the middleware to app.get("/", auth,(req,res....
        next()  //<== execute app.get("/", auth,(req,res....
        //return //<== if you don't have the 'else' statement, then it is best to add return immediatly after the next*(
    }else{
        console.log("z_NO auth");
        res.send("No Auth");    //<== don't go back to app.get()..
    }
}

app.listen(PORT, () =>console.log(`z_Server running on port: http://localhost:${PORT}`));

