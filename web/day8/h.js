// H 

// Let’s go back to our little website we coded in the HTML / CSS introduction. See picture below for inspiration:

// Once the user hovers over the 4 icons, they should increase in size by 40%, once the users mouse leaves the icons their size should decrease to normal again
// Make the Learn More button clickable. Once the user clicks on it:
// Remove the black overlay so that we can see the flowers clearly.
// Change the title from ‘beautiful flowers’ to ‘welcome to my flower shop’, give the text a background and change the color to blue.
// Change the text of the button from ‘learn more’ to ‘buy flowers’, change the background color to red.
// This is what it should look like:

// 1. make hover increase size by 40%
// 2. make mouse leave go back to normal (removeEventListener)

// 3. learn more button: remove black overlay
// 4. learn more button: change title + change background and color to blue
// 5. learn more button: change text of button to "buy  flowers" + background red,


let gravy = document.getElementById('learn-more')


gravy.addEventListener('click', function() {
     console.log('Seb fixed me up')

let titleNode = document.getElementById('title'); //select title
titleNode.innerHTML = "welcome to my flower shop" //change text using innerHTML
titleNode.style.backgroundColor = 'blue';

gravy.innerHTML = "buy flowers";
gravy.style.backgroundColor = 'red';

});







//      this.style.height= '300px';
//      this.style.width= '300px';

// }

// gravy.addEventListener('click', function(){

// let titleNode = document.getElementById('title'); //select title

// titleNode.innerHTML = "welcome to my flower shop" //change text using innerHTML
// titleNode.style.backgroundColor = 'blue'; //change styling


// this.innerHTML = "buy flowers";


// this.style.backgroundColor = 'red';

// elem.addEventListener('mouseenter', function() {
//      this.style.height= '300px';
//      this.style.width= '300px';

// }


let angry = document.getElementsByClassName('icons');
console.log(angry)




for(let elem of angry){

elem.addEventListener('mouseenter', function() {
     this.style.height= '300px';
     this.style.width= '300px';

});

          elem.addEventListener('mouseleave', function() {
          this.style.height= '100px';
          this.style.width= '100px';

});
     }
// var action = function(e){
//     console.log('user clicked on image');
// elem.removeEventListener('mouseover', action);

// });
