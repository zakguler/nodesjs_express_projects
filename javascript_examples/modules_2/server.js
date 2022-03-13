

import {mydata} from './DATA-MODULE/MyData.js';
console.log(`mydata.name: ${mydata.name}`);



//----------------------------------
import * as fs from 'fs';

fs.readFile('./DATA/customer.json', 'utf8', (err, data) => {
    if (err) {
        console.log("File read failed: ", err);
        return;
    }
    try {
        console.log("z_data.toString(): " + data.toString());
        // const customer = JSON.parse(data);
        // console.log("Customer address is:", customer.address); // ==> "Customer address is: Infinity Loop Drive"
    } catch (err) {
        console.log('Error parsing JSON string:', err);
    }
});


//-----------------------------------
import { URL } from 'url'; // in Browser, the URL in native accessible on window

const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);


//------------------------------------
import subtractNums, {addNums, multiplyNums} from './DATA-MODULE/utilNums.js'
const sum = addNums(2,2);
console.log(`z_sum: ${sum}`);
const multiply = multiplyNums(2,2);
console.log(`z_multiply: ${multiply}`);


//------------------------------------
// import * as UTILS from './DATA-MODULE/utilNums.js'
// const sum = UTILS.addNums(2,2);
// console.log(`z_sum: ${sum}`);
// const multiply = UTILS.multiplyNums(2,2);
// console.log(`z_multiply: ${multiply}`);

//------------------------------------
// import anyName from './DATA-MODULE/utilNums.js'
// const total = anyName(2,2);
// console.log(`z_total ${total}`);

//------------------------------------

let custObj = {"name":"Zak", "address": "3671 So vineyard CT"};
console.log(`custObj..${JSON.stringify(custObj)}`);
console.log(`name..${custObj.name}`);

console.log(`hi you..`);
