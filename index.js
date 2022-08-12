

// this is for the click on the event

for (var i = 0;  i < document.querySelectorAll(".drum").length ;  i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color="white";
    var ans = this.innerHTML;
    makeSound(ans);
    buttonAnimation(ans);
  }
);

}

// this is for the key press from the keybord

/* here this key value is represent by the event . if the value has printed
representation then the attributes value is same as the char property
*/

document.addEventListener("keypress",function(event){

makeSound(event.key);   // here the key is a property
buttonAnimation(event.key);
}
);

// this is the main function which plays a sound

function makeSound(key){
  switch (key) {
    case "a":

      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
    //  alert("the a is clicked");
      break;

    case "s":

      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case "d":

      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;

    case "f":

      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;

    case "j":

      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case "k":

      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;

    case 'l':
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    default:

  }


}


function buttonAnimation(currentKey){

var activeKey =  document.querySelector("."+currentKey);
console.log(activeKey);
activeKey.classList.add("pressed");

setTimeout(function(){
  activeKey.classList.remove("pressed");
},100);


}
