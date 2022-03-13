//using ES6, "type":"module"
import * as fs from 'fs';

// read counter file
const data = fs.readFileSync('./../DATA/recordsCount.json'); // read it synchronously
// convert input file to json object
const cnt = JSON.parse(data);
console.log("count is:", cnt.count);


// read/write line-by-line using node.js
let fileCnt = cnt.startFileNo;
var lineCnt = 0;
var memberCnt = 0;
var actionObj = {"action":"FETCH_DUPLICATE_PATIENT_FHIRID","inputFile":"","outputFile":"duplicateFhirIDs.txt","resource":"","memberList":[],"patchList":{"op":"","path":"","value":""}};

fs.readFileSync('./../DATA/memberids.txt').toString()
            .split('\n')
            .forEach(function (line) {

    lineCnt++;
    memberCnt++;
    if (lineCnt!==1  &&
         ( (lineCnt-1) % cnt.count === 0) ) {
        generateOutputFile();

        fileCnt++;
        memberCnt = 1; // reset memberid counter
        actionObj.memberList = [];
    }

    // console.log("lineCnt-" + lineCnt + ": fileCnt-" + fileCnt + ": data=" + line);
    // console.log(": data=" + line);
    let newLine = line.replace(/\r/g, ""); // "J1270962801\r"
    actionObj.memberList.push(newLine);

});

// process the last memberids, if found:
// console.log("z_actionObj.memberList.length: " + actionObj.memberList.length);
// console.log("z_actionObj.memberList[0]]: " + actionObj.memberList[0]);
if (actionObj.memberList.length > 0){
    generateOutputFile();
}


function generateOutputFile() {
    // exit, when memberList[] array has nothing
    if (actionObj.memberList[0]  === "" ||
        actionObj.memberList[0]  === undefined || actionObj.memberList[0] === null) {
        return;
    }

    let ofn = "";
    if (actionObj.memberList[cnt.count - 1]  === undefined || actionObj.memberList[cnt.count - 1] === null) {
        ofn = "duplicateFhirIDs" + "_" + fileCnt + "_" + actionObj.memberList[0] + ".json";
    }else{
        ofn = "duplicateFhirIDs" + "_" + fileCnt + "_" + actionObj.memberList[0] + "_" + actionObj.memberList[cnt.count - 1] + ".json";
    }
    actionObj.outputFile = ofn;
    fs.writeFile("./../DATA/" + ofn,
        JSON.stringify(actionObj),
        (err) => {
            if (err) console.log('Error writing file:', err)
    })
}







//-----
//-----
// build sample input memberids file

// let out = {"action":"FETCH_DUPLICATE_PATIENT_FHIRID","inputFile":"","outputFile":"duplicateFhirIDs.txt","resource":"","memberList":["J1220921201","J1270454001"],"patchList":{"op":"","path":"","value":""}};

// let out = { "memberids": ["J1111111111","J2222222222","J3333333333"] };
// console.log("out file:", out.memberids);


//-----
//-----
//prep for output file
// let outfilename = "batchfile_" + filecount;
// console.log("outfilename:", outfilename);
//
// fs.writeFile('./../DATA/outfilename_1.json',
//                 JSON.stringify(out),
//         (err) => {
//                     if (err) console.log('Error writing file:', err)
//             })
