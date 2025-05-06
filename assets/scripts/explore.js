// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  //retreving the page elemnts 
  const voiceSelect = document.getElementById('voice-select');
  const textarea = document.getElementById('text-to-speak');

  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  //populate voice dropdown
  let voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const opt = document.createElement('option');
    opt.value = voice.name;
    opt.textContent = `${voice.name} (${voice.lang})`; // changing text content in dropdown
    voiceSelect.appendChild(opt);
  });

  //When you click the “Press to Talk” button, the following should happen:
  talkButton.addEventListener('click', () => {
    
    //The text that you have typed into the “Text to speak here” textarea should be spoken out loud using the voice that you have selected
    const text = textarea.value;
    const toSpeak = new SpeechSynthesisUtterance(text);

    toSpeak.voice = voices.find(v => v.name === voiceSelect.value); // which voice to use
    
    //Only while the synthesizer is speaking, the face should swap to being open mouthed (included in the images folder)
    toSpeak.onstart = () => faceImage.src = 'assets/images/smiling-open.png';
    toSpeak.onend = () => faceImage.src = 'assets/images/smiling.png';

    speechSynthesis.speak(toSpeak);
  });
}