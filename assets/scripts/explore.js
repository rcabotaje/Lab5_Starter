// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector("button");
  const textArea = document.getElementById('text-to-speak');
  const img = document.getElementById("explore");
  function populateVoices() {
    const voices = speechSynthesis.getVoices();

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index; 
      option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' [default]' : ''}`;
      voiceSelect.appendChild(option);
    });
  }
  speechSynthesis.onvoiceschanged = populateVoices;
  populateVoices();

  

  button.addEventListener("click", function(){
    
    const text = textArea.value;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    const selectedIndex = voiceSelect.value;
    if (selectedIndex != "select") {
      utterance.voice = voices[selectedIndex];
    }
    utterance.onstart = function() {
      img.src = "assets/images/smiling-open.png"; 
    };
  
    // When speaking ends, change the image back
    utterance.onend = function() {
      img.src = "assets/images/smiling.png";
    };
    if(speechSynthesis.speaking){
      img.src = "assets/images/smiling-open.png";
      img.alt = "speaking";
    }
    else{
      img.src = "assets.images/smiling";
      img.alr = "Smiling Face";
    }
    speechSynthesis.speak(utterance);
  });
  
}