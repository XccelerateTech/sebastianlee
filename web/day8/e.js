
   
 document.getElementById("info-field");
    document.getElementsByTagName("p");

 var x = document.getElementById("info-field");
var y = x.getElementsByTagName("p");


const sebsFunc2 = (className) => {

   return document.getElementsByClassName(className)

 }
 
 sebsFunc2('content-info')



 const sebFunc3 = (id) => {
   console.log(`Deleting id : ${id}`)
   let a=  document.getElementById(id)
   a.removeChild(a.firstChild)

 }


 //G 

 Write a function that takes an id as a parameter, it should look for an element with that id and remove all it’s child elements.

Please record and save both functions in JavaScript files to upload to GitHub

https://xccelerate.co/course-detail/HK/FTSE/

const samFunc1 = (id) => {

   var list = document.getElementById (id)
   list.removeChild(list.childNodes[0]);
}

samFunc1 ("footer") ; 

