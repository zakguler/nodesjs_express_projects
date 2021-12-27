

//import a json file/object
// import data_x from '../DATA-MODULE/data_module_emp.js';
// console.log(`data_x.name: ${data_x.name}`);
import mydata from '../DATA-MODULE/data_module_emp.js';
console.log(`mydata.name: ${mydata.name}`);
//??? not working
//----------------------------------
import * as fs from 'fs';

fs.readFile('../DATA/customer.json', 'utf8', (err, data) => {
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
import { addNums } from './addNums.js'
const sum = addNums(2,2);
console.log(`z_sum: ${sum}`);


let custObj = {"name":"Zak", "address": "3671 So vineyard CT"};
console.log(`custObj..${JSON.stringify(custObj)}`);
console.log(`name..${custObj.name}`);

console.log(`hi you..`);
