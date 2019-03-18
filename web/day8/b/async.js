// var http = new XMLHttpRequest();

// http.open('GET', './data/json.json');

// http.onreadystatechange = function() {
//     if(http.readyState != XMLHttpRequest.DONE) {
//         return;
//     } else if(http.status == 200) {
//         console.log(http.responseText);
//     } else {
//         console.log('error occurred' + http.status);
//     }
// }
// // onreadystatechange should be before http.send()
// http.send();

https://restcountries.eu/rest/v2/region/europe




// console.log('I actually work.')
// function informMe(endpoint, value,callback){
// var http = new XMLHttpRequest();

// http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`);

// http.onreadystatechange = function() {
//     if(http.readyState != XMLHttpRequest.DONE) {
//         return;
//     } else if(http.status == 200) {
//         console.log(http.responseText);

//         let data= http.responseText
//          callback(data);
//     } else {
//         console.log('error occurred' + http.status);
//     }
// }
// // onreadystatechange should be before http.send()
// http.send();


//     // Call the AJAX here, And get the Data
//     // Return the Data by calling callback with the resulting data 
// }



// informMe ('name', 'china', function(data){
//     console.log(JSON.parse(data));
// })

// console.log('show me the money')





//C
//Write a function called whoIsInSpace(), it should return an array with the names of all people in space console.log this array.   To get the names make a XMLHttpRequest to the International Space Station.


function whoIsInSpace (callback){
var http = new XMLHttpRequest();

http.open('GET', `api.open-notify.org/astros.json`);

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText);

        let data= http.responseText
         callback(data);
    } else {
        console.log('error occurred' + http.status);
    }
}
// onreadystatechange should be before http.send()
http.send();


    // Call the AJAX here, And get the Data
    // Return the Data by calling callback with the resulting data 
}



whoIsInSpace (function(data){
    console.log(JSON.parse(data));
})

console.log('show me the money')