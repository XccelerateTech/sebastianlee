

function informMe((United Kingdom, London), (United Kingdom, London),(United Kingdom, London)){ //send has to be in function
 var http = new XMLHttpRequest();

http.open("GET", 'https:restcountries.eu/'', 'true');   // target the file you want to get

// Call the AJAX here, And get the Data
    callback(data); // Return the Data by calling callback with the resulting data 
}

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText);
    } else {
        console.log('error occurred' + http.status);
    }
}
// onreadystatechange should be before http.send()
http.send();

informUS
  
  </script>


</body>


</html>