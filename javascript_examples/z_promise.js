console.log(`Hi...`);

//================================
//================================
//================================

EX-1
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`making request to ${location}`);
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('PROMISE-REJECT: we can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise( (resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra Information + ${response}`)
    })
}

//run...
// makeRequest('Google').then( (response)=> {
makeRequest('Facebook').then( (response)=> {
    console.log((response));
    return processRequest(response);
}).then(processResponse => {
    console.log(processResponse);
}).catch( err=>{
    console.log(err)
})


//================================
//================================
//================================

//EX_2
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
        reject("EX_2: fetch got rejected..");
    }else{
        resolve({
            id:1,
            message:'EX_2: nice work..'
        });
    }
})


//consume/call the promise:
fetchSomeData
    .then( (objFromResolve) => {
        console.log(`EX_2: then: `, objFromResolve);
    })
    .catch( (err) => {
        console.error((`EX_2: catch: `, err));
    });

//================================
//================================
//================================
//EX-3
let prom = new Promise( (resolve, reject)=>{
    let val = 3;
    if (val===3){
        resolve("EX-3... my TRUE value: " + val);
    }else{
        reject("EX-3... my FALSE value: " + val);
    }
});

prom.then( (str)=>{
    console.log(str);
}).catch( (str)=>{
    console.log(str);
});


//================================
//================================
//================================
//EX-4
// Let's create several functions that return Promises
// and look at Promise chaining

let fetchData = (data) => {
    return new Promise( (resolve, reject) => {
        if (true){
            resolve( {id: 999, message: 'EX-4... I am from fetchData.resolve().'});
        }else{
            reject(console.log("EX-4... I am from fetchData.reject()."));
        }
    });
}
//----
let parseData = (data) => {
    return new Promise( (resolve, reject) => {
        if (true){
            let parsedOutput = `EX_4: Parsed the data for id: ${data.id} with message: ${data.message}`;
            resolve({ parsed: parsedOutput });
        }else{
            reject(console.log("EX-4... I am from parseData.reject()."));
        }
    });
}
//---
let echoData = (data) => {
    return new Promise( (resolve, reject) => {
        if (true){
            console.log(data.parsed);
        }else{
            reject(console.log("EX-4... I am from echoData.reject()."));
        }
    });
}
//Promise chaining...
fetchData().then( (promiseFetchJson)=>{
    console.log("EX-4... id: " + promiseFetchJson.id);
});
//
fetchData().then(parseData).then( (promiseParseJson)=>{
    console.log(promiseParseJson.parsed);
});
//
fetchData().then(parseData).then(echoData).catch();






