//using ES6, "type":"module"
import * as fs from 'fs';

// read counter file
const data = fs.readFileSync('./DATA/recordsCount.json'); // read it synchronously
// convert input file to json object
const cnt = JSON.parse(data);
console.log("count is:", cnt.count);



// build sample input memberids file
let out = { "memberids": ["J1111111111","J2222222222","J3333333333"] };
console.log("out file:", out.memberids);



//prep for output file
let increment = 0;
let filecount = 1;
let outfilename = "batchfile_" + filecount;
console.log("outfilename:", outfilename);

fs.writeFile('./DATA/outfilename_1.json',
                JSON.stringify(out),
        (err) => {
                    if (err) console.log('Error writing file:', err)
            })
