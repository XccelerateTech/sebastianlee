// {<script type='text/javascript'></script>

// $('.sections, #row-phone')

// $('input[name*="phone"]')

// $('.sectiontr[.row:1') IMPORTANT

// $('.sections.row,#td')

// $('sections')


// ANSWERS:

// $('tr')[2];

// $('sections')

// function adder (a+b) {
//     return a + b
// };

// const adder 1 = (a + b)  => {
//     return a + b
// }

// class Student{
//     constructor(options){
//         this.subject = options.subject
//     }
// }

// const Student1 = function (){

// }

// var textArea;
// let i;

// for (1 = 0; i< Array.length; i ++)

// }

// STAY WITH ONE CONVENTION

// Head tag should contain all links to bootstrap css ETC

// linking CDN script should be done in HTML then link to script.js file

// var p = $("tbody tr:nth-child(2)", { id:"ul"}) */}

// //A

// $('#row-phone input')

// $('tbody tr:nth-child(2)')

// $('sections')

// $('input[placeholder=Email]')

//B'



$('tbody').append(`
<tr class="row">
    <td>Peter</td>
    <td>123456789</td>
    <td>peter@gmail.com</td>
</tr>`)

$('#row-submit').append('<input type="reset" value="clear" id="clear-input" class="clear"/>')

$('#header').append('<h1>sebastians contact list application</h1>')

$('#contact-list').css('color','red')



//D

$('.name').on('keydown',function (d) {
    var input = d.target.value;
    if (input.length>50){
     alert(`name is too long`)
    }
    else {
    }
    if(input.length > 50) {  50
        $(this).css('border','solid 2px red'); 
    }else{
        $(this).css('border','solid 1px black'); 
    }
});

$('.phone').on('blur', function(e) {
    var input2 = e.target.value;
    if (input2.length < 6 || input2.length > 16) || isNaN(input2)) {
       $(input2) alert ('some ting wong MY FRIEND')
    }
    else {
 }
 if ( input2.length < 6 || input2.length > 16 || isNaN(input2)) { 
    $(this).css('border','solid 2px red'); 
} else {
    $(this).css('border','solid 1px black'); 
});

$('#clear-input').on('click', function() {
    $('.name.phone.email').remove();
});















{/* <ul>
<li>Name :Peter</li>
<li></li>





            $('tbody').append(`<tr class="row">
                <td>Peter</td>
                <td>123456789</td>
                <td>peter@gmail.com</td>
            </tr>`
            )
            
            $('#row-submit').append('<input type="reset" value="clear" id="clear-input" class="clear"/>'
            )
            
            $('#header').append(
            '<h1>sebastians contact list application<h1>'
            )
            
            $('#contact-list').css('color','red') */}
            

