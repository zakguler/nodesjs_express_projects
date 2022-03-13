//================================
//================================
//================================

//Async Syntax
// 	The keyword async before a function makes the function return a promise:
//      "async and await make promises easier to write"
//      async makes a function return a Promise
//      await makes a function wait for a Promise

//EX-1
myFunction = async () => {return "Hello"};

//same as
async function myFunction() {
    return "EX-1... Hello";
}
//Is the same as:
// async function myFunction() {
//     return Promise.resolve("Hello");
// }

myFunction().then( (data)=> {
    console.log(data);
});

//================================
//================================
//================================



