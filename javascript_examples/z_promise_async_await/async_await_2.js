//https://www.youtube.com/watch?v=V_Kr9OSfDeU&list=PLvFBAcs5-Ef5YWJRTYfZQAeQnDaMNVIrS&index=10
//
//Promise example convert it to async/await
//
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


//====
//== convert it to async/await
//====
console.log("=========================================")
async function doWork(){
    try {
        // const response = await makeRequest("Google");
        const response = await makeRequest("Facebook");
        console.log("async-makeRequest: Response Received");
        const processResponse = await processRequest(response);
        console.log(`async-makeRequest: ` + processResponse);
    } catch(err) {
        console.log(`async-makeRequest: ` + err)
    }
}

doWork();


