import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        id: "33317575-13c6-4db5-8acd-f63713df986e"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24,
        id: "8887575-13c6-4db5-8acd-f63713df986e"
    }

]


export const getUsers = (req,res)=> {
    // console.log(users);
    res.send(users);
}


export const getUser = (req,res)=> {
    console.log(req.params);
    // get the id value:
    // const id = req.params.id; //==> { id: 2 }
    const { id } = req.params;  //==> { id: 2 }

    // search by id
    const foundUser = users.find( (user) => user.id === id);
    //
    res.send(foundUser);
}


export const createUser = (req,res)=>{
    console.log("Post route reached");

    const user = req.body;
    console.log("z_incoming from post:");
    console.log(req.body);

    const userId = uuidv4();
    const userWithId = { ...user, id: userId }; //spread operator to add new 'id' column to the user object
    console.log("z_userWithId:");
    console.log(userWithId);
    users.push(userWithId);
    console.log(`User [${user.firstName}] added to the database.`);
    res.send(`User name: [${user.firstName}] added to the database`);
}


export const updateUser = (req,res)=> {
    // first, get the :id
    console.log(req.params);
    const {id} = req.params;

    // second, get all the possible fields from the req{POST/JSON/BODY}
    console.log(req.body);
    const {firstName, lastName, age} = req.body;

    // third, find the user
    let user = users.find( (user)=> user.id === id);

    // next, check which one of the element(s) need to be updated
    if (firstName){
        user.firstName = firstName;
    }
    if (lastName){
        user.lastName = lastName;
    }
    if (age){
        user.age = age;
    }

    //
    res.send(`User with the id ${id} has been updated.`);
}


export const deleteUser = (req,res)=> {
    console.log(req.params);
    // get the id value:
    // const id = req.params.id; //==> { id: 2 }
    const { id } = req.params;  //==> { id: 2 }

    // filter out by id
    users = users.filter( (user) => user.id !== id);
    console.log(users);
    //
    res.send(`User with the id ${id} deleted from the database.`);
}

