document.addEventListener("DOMContentLoaded", function () {

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

const items = document.querySelectorAll('.item:not(:first-child)');
const options = {
  threshold: 0.5,
};

function addSlideIn(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
      // console.log('Element is intersecting and sliding in:', entry.target);
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options);
items.forEach((item) => {
  observer.observe(item);
  console.log('Observing element:', item);
});



});

//quiz app
$(document).ready(function() {
  
  // Disable all radio buttons when one is clicked
  $('input[type=radio]').click(function() {
     $('input[type=radio]').attr('disabled', true);
     $(this).attr('disabled', false);
   });
  
   // Check answer when submit button is clicked
   $('#submit').click(function() {
     var answer = $('input[name=q1]:checked').val();
     if (answer == 'a') {
       $('.feedback').html('<p class="correct">Correct!</p>');
     } else {
       $('.feedback').html('<p class="incorrect">Incorrect!</p>');
     }
   });
});