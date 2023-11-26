// Function to generate a random number within a specific range
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to create a star element with random position and size
    function createStar() {
      const star = document.createElement('div');
      star.className = 'stars';
      star.style.left = `${getRandomInt(0, window.innerWidth)}px`;
      star.style.top = `${getRandomInt(0, window.innerHeight)}px`;
      star.style.width = `${getRandomInt(1, 3)}px`;
      star.style.height = `${getRandomInt(1, 3)}px`;

      document.body.appendChild(star);
      animateStar(star);
    }

    // Function to animate a star element
    function animateStar(star) {
      star.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(100vh)' }
        ],
        {
          duration: 5000,
          easing: 'linear',
          iterations: Infinity
        }
      );
    }

const numberOfStars = 100; // Set an initial limit for the number of stars

for (let i = 0; i < numberOfStars; i++) {
  createStar();
}

// Create a new star periodically, but only up to a certain limit
const maxStars = 500; // Set a maximum limit for the number of stars
const starsInterval = setInterval(() => {
  if (document.querySelectorAll('.stars').length < maxStars) {
    createStar();
  } else {
    clearInterval(starsInterval); // Stop creating stars once the maximum limit is reached
  }
}, 1);
$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});