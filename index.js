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
        // this.style.color="white";//this = which button is clicked

        var buttonInnerHtml=this.innerHTML;
        switch (buttonInnerHtml) {
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                console.log(buttonInnerHtml);
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                console.log(buttonInnerHtml);
                break;
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                console.log(buttonInnerHtml);
                break;
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                console.log(buttonInnerHtml);
                break;
            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                console.log(buttonInnerHtml);
                break;
            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                console.log(buttonInnerHtml);
                break;
            case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                console.log(buttonInnerHtml);
                break;
            default:
               console.log(buttonInnerHtml);
                break;
        }
    
    });
    
}

