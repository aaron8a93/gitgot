const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");

function toggleMode() {
  body.classList.toggle("dark-mode");

  // Check if the body has the dark-mode class
  if (body.classList.contains("dark-mode")) {
    // If it does, update the mode status to "Dark Mode"
    modeStatus.innerText = "Currently in Dark Mode";
  } else {
    // update the mode status to "Light Mode"
    modeStatus.innerText = "Currently in Light Mode";
  }
}

modeToggle.addEventListener("click", toggleMode);

//image slide
// document.addEventListener("DOMContentLoaded", function() {
//   const sliderContainer = document.getElementById('sliderimg');
//   const images = document.querySelectorAll('.sliderimg img');
//   const images = sliderContainer.querySelectorAll('img');
//   const previousImage = document.getElementById("prev");
//   const nextImage = document.getElementById("next");

//   let currentIndex = 0;

//   function reset() {
//     for (let i = 0; i < images.length; i++) {
//       images[i].classList.remove('active');
//     }
//   }

//   function initializeSlider() {
//     reset();
//     images[currentIndex].classList.add('active');
//   }

//   function slideLeft() {
//     reset();
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = images.length - 1;
//     }
//     images[currentIndex].classList.add('active');
//   }

//   function slideRight() {
//     reset();
//     currentIndex++;
//     if (currentIndex >= images.length) {
//       currentIndex = 0;
//     }
//     images[currentIndex].classList.add('active');
//   }

//   initializeSlider();
  

//   previousImage.addEventListener('click', function() {
//     slideLeft();
//   });

//   nextImage.addEventListener('click', function() {
//     slideRight();
//   });
// });
