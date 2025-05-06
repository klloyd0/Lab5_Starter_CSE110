// expose.js

function init() {
  //retrieving all the elements 

  const hornSelect = document.getElementById('horn-select');
  const volume = document.getElementById('volume');
  
  const hornImage = document.querySelector('#expose img'); 
  const audio = document.querySelector('#expose audio');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');

  //the confetti
  const jsConfetti = new JSConfetti();

  //map horn select to respective img and audio
  const hornMap = {
    'air-horn':   { img: 'assets/images/air-horn.svg',    audio: 'assets/audio/air-horn.mp3' },
    'car-horn':   { img: 'assets/images/car-horn.svg',    audio: 'assets/audio/car-horn.mp3' },
    'party-horn': { img: 'assets/images/party-horn.svg',  audio: 'assets/audio/party-horn.mp3' }
  };

  //handle horn selection 
  hornSelect.addEventListener('change', () => {
    //When you select a horn from the drop down menu, the following should occur:
    const selection = hornSelect.value;
    const assets = hornMap[selection] || {}; // getting values from the hornMap

    //The correct image should display
    hornImage.src = assets.img || 'assets/images/no-image.png'; 
    hornImage.alt = assets.img ? selection.replace('-', ' ') + ' image' : 'No image selected'; 
    
    //The correct audio sound file should be set
    audio.src = assets.audio || ''; 
  });

  //handle volume selection
  volume.addEventListener('input', () => {
    const vol = volume.valueAsNumber;
    audio.volume = vol / 100;

    if (vol === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  //play button
  playButton.addEventListener('click', () => {
    audio.play();
    //If the Party Horn is selected, confetti should shoot out when the play button is clicked
    if (hornSelect.value === 'party-horn' && window.JSConfetti) {
      jsConfetti.addConfetti();
    }
  });
}

window.addEventListener('DOMContentLoaded', init);
