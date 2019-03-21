class User {
    constructor (options){
        this.firstname = options.name.first
        this.lastname = options.name.last
        this.email = options.email 
        this.dob = options.dob 
    }
}

function callUserRandomGen() {
    let http = new XMLHttpRequest();
    http.open('GET', 'https://randomuser.me/api/')
    
    http.onreadystatechange = function () {
        if(http.readyState != XMLHttpRequest.DONE){
            return;
        } else if (http.status == 200){
            let parsed = JSON.parse(http.responseText);
            
            console.log(parsed);
            console.log('first');
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send()

}

callUserRandomGen();

function callUserRandomGen2() {
    let http = new XMLHttpRequest();
    http.open('GET', 'https://randomuser.me/api/')
    
    http.onreadystatechange = function () {
        if(http.readyState != XMLHttpRequest.DONE){
            return;
        } else if (http.status == 200){
            let parsed = JSON.parse(http.responseText);
            
            let parse = JSON.parse(http.responseText)
            let

        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send()

}

callUserRandomGen2();




  