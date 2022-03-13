
//to run, right click:
// click on "Run server.js"

console.log(`EX_4:..................................`);
//==============================
//EX_4:
let p = new Promise( (resolve, reject)=>{
    let a = 1+2;
    if (a===3){
        resolve("EX_4: Success");
    }else{
        reject("EX_4: Failed");
    }
});

p.then( (msg) => {
    console.log(`EX_4: in then: ` + msg);
}).catch( (err) => {
    console.log(`EX_4: in catch: ` + err);
});



console.log(`EX_3:..................................`);
//==============================
//EX_3

// let myPromise = new Promise(function(resolve, reject) {
//     let x = 0;
// // some code (try to change x to 5)
//     if (x == 0) {
//         resolve("z_OK");
//     } else {
//         reject("z_Error");
//     }
// });

let myPromise = new Promise((resolve, reject) => {
    let x = 0;
// some code (try to change x to 5)
    if (x == 0) {
        resolve("EX_3: z_OK");
    } else {
        reject("EX_3: z_Error");
    }
});

myPromise.then( (resolveMsg) => {
    console.log(`EX_3: then: `, resolveMsg);
})
    .catch( (err) => {
        console.error((`EX_3: catch: `, err));
    });


console.log(`EX_2:..................................`);
//==============================
//***
//EX_2
// Let's create several functions that return Promises
// and look at Promise chaining

// Simulate fetching some data
// let fetchData = function(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Fetching Data Complete');
//             resolve({id: 1, message: 'Nice work'});
//         }, 2000);
//     });
// };
let fetchData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('EX_2: Fetching Data Complete');
            resolve({id: 1, message: 'EX_2: Nice work'});
        }, 2000);
    });
};

// Parse the data
let parseData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parsedOutput = `EX_2: Parsed the data for id: ${data.id} with message: ${data.message}`;
            resolve({ parsed: parsedOutput });
        }, 2000);
    });
};

// Echo the data
let echoData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data.parsed);
        }, 2000);
    });
};

// Chaining the Promises!
fetchData().then(parseData).then(echoData).catch(err => {
    console.error(err);
});


console.log(`EX_1:..................................`);
//==============================
//EX_1
// let allGood = false;
let allGood = true;

// Define a Promise
// A Promise can be in one of three states:
// - Pending     | hasn't settled to a value yet
// - Fulfilled   | settled successfully  (calling resolve())
// - Rejected    | settled unsuccessfully (calling reject())

//define the promise obj:
let fetchSomeData = new Promise( (resolve, reject) => {
    if (!allGood){
        reject("EX_1: fetch got rejected..");
    }else{
        resolve({
            id:1,
            message:'EX_1: nice work..'
        });
    }
})


//consume/call the promise:
fetchSomeData
    .then( (objFromResolve) => {
            console.log(`EX_1: then: `, objFromResolve);
    })
    .catch( (err) => {
        console.error((`EX_1: catch: `, err));
    });
