function whoIsInSpace(callback){
    let http = new XMLHttpRequest();
    http.open('GET', `http://api.open-notify.org/astros.json`)

    http.onreadystatechange = function () {
        if(http.readyState != XMLHttpRequest.DONE){
            return;
        } else if (http.status == 200){
            callback(http.responseText)
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send()

}
whoIsInSpace(function(data){
    console.log(JSON.parse(data))
})


function nameOfWhoIsInSpace (cb) {
    let http = new XMLHttpRequest(); 
    http.open('GET', `http://api.open-notify.org/astros.json`) 

    http.onreadystatechange = function (){ 
        if(http.readyState != XMLHttpRequest.DONE){ 
            return;
        } else if (http.status == 200){ 
            let parsed = JSON.parse (http.responseText)
            cb(parsed.people.map(function(person){
                return parsed.name 
            }));
            
        } else { //otherwise throw and error and why
            console.log('error occurred' + http.status)
        }
    };
    http.send()
}

            
nameOfWhoIsInSpace(function(cb){
    console.log(cb)
});