"use strict";

document.querySelector(".btn").addEventListener("click",function(e){
e.preventDefault();
 const text = document.querySelector("#text").value;
 const voice = new SpeechSynthesisUtterance(text);
 voice.lang = "en-GB";
 console.log(voice);
 speechSynthesis.speak(voice);
})
