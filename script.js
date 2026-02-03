const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const displayImage = document.getElementById('displayImage');
const questionText = document.getElementById('questionText');
const music = document.getElementById('bgMusic');

// The "No" button runs away
noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// The "Yes" click celebration
yesButton.addEventListener('click', () => {
  displayImage.src = "IMG_0006.jpeg"; 
  questionText.innerHTML = "Yay! See you on the 14th, Choti Gubiii! 💖";

  // Hide the No button and reset the Yes button position
  noButton.style.display = "none";
  yesButton.style.transform = "scale(1.2)";

  // Play your song
  music.play();
});