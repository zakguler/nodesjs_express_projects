
//===== Important note
// code gets executed Top --> down
//



import express from 'express';

const router = express.Router(); //<== same as the 'app.' in server.js


// router.get("/users", (req, res) => {
router.get("/", (req, res) => {
    res.send("User list");
})


// code runs top-down, therefore
// '/new' has to be coded ahead of '/:id'
// so it won't get confused and assumes 'users/new' is 'id' instead of 'new'
// 'hope this will make sense. [test it..]
//
//
// render out of [form]
//
    // router.get("/new", (req, res) => {
    //     res.send("User new form");
    // })
//
// EX: render form
// router.post("/users/new", (req, res) => {
//
router.get("/new", (req, res) => {
    // "users/new": default views location: /views/users/new.ejs
    res.render("users/new", {firstName: "Test"});   //<=== default form's /views/users/new.ejs: 'firstName'
})
//

// note: the form/POST will come here
// router.post("/", (req, res) => {
//     res.send("Create user");
// })
router.post("/", (req, res) => {
    const isValid = true; //<== test-1
    // const isValid = false;  //<=== test-2
    if (isValid) {
        users.push({name: req.body.firstName});
        res.redirect(`/users/${users.length - 1}`)//<== redirect to a brand new url. display the last [index] users
    }else{
        console.log("Error");
        // go back to the page you came from and redisplay the old data user typed last
        res.render("users/new", {firstName: req.body.firstName});   //<=== default form's /views/users/new.ejs: 'firstName'
    }
})



//====== create users object for testing:
const users = [{name: "Kyle"}, {name:"Sally"}];

//======= middleware for param:
// this code will run before any of the route.xxx that checks for '/:id'
router.param("id", (req, res, next, id) => {
    console.log("z_middleware.. id: " + id);
    req.user = users[id];   //<=== add user[idx] index/array to res.user: localhost:3000/users/1
    next(); //<===== you HAVE to HAVE this here or the app will stay put just before this line
});



//==========================================================================
// using 'route.' for all routes that looks for the same parameter'/:id'
router
    .route("/:id")
        .get((req, res) => {
            console.log(req.user); //<=== was added by the middleware 'router.param()'
            res.send(`Get user with id: ${req.params.id}`);
        })
        .put((req, res) => {
            res.send(`Update user with id: ${req.params.id}`);
        })
        .delete((req, res) => {
            res.send(`Delete user with id: ${req.params.id}`);
        })
// router.get("/:id", (req, res) => {
//     res.send(`Get user with id: ${req.params.id}`);
// })
//
// router.put("/:id", (req, res) => {
//     res.send(`Update user with id: ${req.params.id}`);
// })
//
// router.delete("/:id", (req, res) => {
//     res.send(`Delete user with id: ${req.params.id}`);
// })
//==========================================================================


// module.exports = router;    //<===  make the router object/field visible
export default router;
