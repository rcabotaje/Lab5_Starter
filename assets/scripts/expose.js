// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select"); //should return option's value as a string.
  const imgSelect = document.querySelector("img");
  const audioSelect = document.querySelector("audio");
  const button = document.querySelector("button");
  const getVol = document.getElementById("volume");
  const volumeImg = document.getElementById("volume-controls");
  const jsConfetti = new JSConfetti();
  volumeImg.addEventListener("change",(event) => {
    if(getVol.value == 0){
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-0.svg";
      volumeImg.alt = "Volume Level 0";
    }
    else if(getVol.value > 67){
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-3.svg";
      volumeImg.alt = "Volume Level 3";
    }
    else if(getVol.value >33 ){
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-2.svg";
      volumeImg.alt = "Volume Level 2";
    }
    else{
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-1.svg";
      volumeImg.alt = "Volume Level 1";
    }
  });

  button.addEventListener("click", (event) =>{
    if(hornSelect.value =="party-horn"){
      jsConfetti.addConfetti();
    }
    audioSelect.volume = getVol.value/100.0;
    audioSelect.play();
  });

  hornSelect.addEventListener("change", (event) => {
    if(hornSelect.value == "air-horn"){
      imgSelect.src =  "assets/images/air-horn.svg";
      imgSelect.alr = "Air Horn"
      audioSelect.src = "assets/audio/air-horn.mp3";
    }
    else if(hornSelect.value == "car-horn"){
      imgSelect.src =  "assets/images/car-horn.svg";
      imgSelect.alr = "Car Horn"
      audioSelect.src = "assets/audio/car-horn.mp3";
    }
    else if(hornSelect.value == "party-horn"){
      imgSelect.src =  "assets/images/party-horn.svg";
      imgSelect.alr = "Party Horn"
      audioSelect.src = "assets/audio/party-horn.mp3";
    }
  });
}