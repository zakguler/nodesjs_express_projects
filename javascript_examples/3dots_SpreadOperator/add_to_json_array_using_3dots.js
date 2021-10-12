import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }

]

console.log(users);

const user =
    {
        "firstName": "Jack",
        "lastName": "Doe",
        "age": 15
    }
;

const userId = uuidv4();
const userWithId = { ...user, id: userId }; //spread operator to add new 'id' column to the user object
users.push(userWithId);

console.log(userWithId);

console.log(users);
