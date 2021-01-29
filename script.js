var numberofDrumbutton=document.querySelectorAll(".drum").length;
for (var i=0; i<numberofDrumbutton; i++)

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonInnerHTML = this.innerHTML;    
    
    makeSound(buttonInnerHTML);

});

document.addEventListener("keypress", function (event) {

    
    makeSound(event.key);
    
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sound/tom-1.wav");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("sound/tom-2.wav");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sound/tom-3.wav");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sound/tom-4.wav");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sound/crash.wav");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sound/base.wav");
            kick.play();
            break;

        case "l":
            var snare = new Audio("sound/snare.wav");
            snare.play();
            break;

        default:
            var death = new Audio("sound/death.mp3");
            death.play();
            break;
    }
}