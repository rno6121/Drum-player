var numberOfButttons=document.querySelectorAll(".drum").length
for(i=0;i<numberOfButttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick() {
    var buttonInnerHTML=this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
            var newAudio= new Audio("sounds/crash.mp3");  
            newAudio.play();
            
            break;
        case "a":
            var aAudio= new Audio("sounds/kick-bass.mp3");  
            aAudio.play();  
            break;
        case "s" :
            var sAudio= new Audio("sounds/snare.mp3");  
            sAudio.play();  
            break;
        case "d" :
            var dAudio= new Audio("sounds/tom-1.mp3");  
            dAudio.play();  
            break;
        case "j" :
            var jAudio= new Audio("sounds/tom-2.mp3");  
            jAudio.play();  
            break; 
        case "k" :
            var kAudio= new Audio("sounds/tom-3.mp3");  
            kAudio.play();  
            break;               
        case "l" :
            var lAudio= new Audio("sounds/tom-4.mp3");  
            lAudio.play();  
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
    buttonAnimation(buttonInnerHTML);
   
}
document.addEventListener("keydown",keyboard)
function keyboard(event) {
    var keys=event.key;
    // console.log(event.key);
    switch (keys) {
        case "w":
            var newAudio= new Audio("sounds/crash.mp3");  
            newAudio.play();
            
            break;
        case "a":
            var aAudio= new Audio("sounds/kick-bass.mp3");  
            aAudio.play();  
            break;
        case "s" :
            var sAudio= new Audio("sounds/snare.mp3");  
            sAudio.play();  
            break;
        case "d" :
            var dAudio= new Audio("sounds/tom-1.mp3");  
            dAudio.play();  
            break;
        case "j" :
            var jAudio= new Audio("sounds/tom-2.mp3");  
            jAudio.play();  
            break; 
        case "k" :
            var kAudio= new Audio("sounds/tom-3.mp3");  
            kAudio.play();  
            break;               
        case "l" :
            var lAudio= new Audio("sounds/tom-4.mp3");  
            lAudio.play();  
            break;
        default:
            console.log(event.key);
            break;
        
    }
    buttonAnimation(keys);
    
}
function buttonAnimation(currentKey) {
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
    
}
