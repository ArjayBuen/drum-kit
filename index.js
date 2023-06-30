// alert("Working!");

// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got clicked!");
// }

//this is another way of the code at the top
// document.querySelector("button").addEventListener("click",function() {
//     alert("I got clicked!");

// });

//  if(document.querySelector(".w").addEventListener("click",function(){
//     alert("I got clicked!");
//    }) ){}else if()... this is the solution that comes to my mind

let numberOfDrumButtons=document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        // alert("I got clicked!");
        this.style.color="white";//this = which button is clicked
    
    });
    
}

