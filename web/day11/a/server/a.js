// $(function(){ 
//     $.get({"./data.json",
   



// }).done(function(data){
//     console.log("This function will be run if the ajax is successful");

// })
// })


// A

// $(()=>{
//     $.ajax({
//         url:"./data.json",
//         beforeSend:function(xhr){
//             // This function will be run before sending ajax.
//         },
//         type: "GET",
       
//     }).done(function(data){
//         console.log("This function will be run if the ajax is successful");
//         console.log(data)
//     }).fail(function(data){
//         console.log("This function will be run if the ajax if failed");
//     }).always(function(data){
//         console.log("This function runs no matter success or fail.");
//     });
// });

$(function(){ 

    const informMe =(endpoint, value) =>{
         $.ajax({
        url:`https://restcountries.eu/rest/v2/${endpoint}/${value}`,
        beforeSend:function(xhr){
            // This function will be run before sending ajax.
        },
        type: "GET",
       
        
    }).done(function(data){
        console.log(data)
        console.log("This function will be run if the ajax is successful");
    }).fail(function(data){
        console.log("This function will be run if the ajax if failed");
    }).always(function(data){
        console.log("This function runs no matter success or fail.");
    });

    };


informMe ('lang', 'es');


});



const add = (x,y) => {
    return x + y
}