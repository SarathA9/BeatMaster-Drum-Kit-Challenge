var drumno=document.querySelectorAll(".drum").length;
for(i=0;i<drumno;i++){
    if(i===0){
        document.querySelectorAll("button")[0].addEventListener("click",function (){
            var audio=new Audio("sounds/crash.mp3");
    audio.play();
        });
    }else if(i===1){
        document.querySelectorAll("button")[1].addEventListener("click",function (){
            var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
        });
    }else if(i===2){
        document.querySelectorAll("button")[2].addEventListener("click",function (){
            var audio=new Audio("sounds/snare.mp3");
    audio.play();
        });
    }else if(i===3){
        document.querySelectorAll("button")[3].addEventListener("click",function (){
            var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
        });
    }else if(i===4){
        document.querySelectorAll("button")[4].addEventListener("click",function (){
            var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
        });
    }else if(i===5){
        document.querySelectorAll("button")[5].addEventListener("click",function (){
            var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
        });
    }else if(i===6){
        document.querySelectorAll("button")[6].addEventListener("click",function (){
            var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
        });
    }
}

function beat(soundkey){
    var audio=new Audio(soundkey);
    audio.play();
}

// Function to play sound
function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

// Event listener for key presses
document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "w":
            playSound("sounds/crash.mp3");
            break;
        case "a":
            playSound("sounds/kick-bass.mp3");
            break;
        case "s":
            playSound("sounds/snare.mp3");
            break;
        case "d":
            playSound("sounds/tom-1.mp3");
            break;
        case "j":
            playSound("sounds/tom-2.mp3");
            break;
        case "k":
            playSound("sounds/tom-3.mp3");
            break;
        case "l":
            playSound("sounds/tom-4.mp3");
            break;
        default:
            console.log("Invalid key pressed");
    }
});

function help(){
    alert("Try it by pressing the keyboard keys (w, a, s, d, j, k, l) or clicking the buttons below:");
}