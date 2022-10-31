/* Author: 
Inayatullah
*/
//variables
var Box = document.querySelector('.sound-box'),
  btn, active;

// adding event listener 
Box.addEventListener('click', playSong);

// function for playing and stopping the sounds 
function playSong(e) {
  active = document.querySelector('.active');
  if (active) {
    active.pause();
    active.classList.remove('active');
  }
  if (e.target != this) {
    btn = e.target.children[0];
    btn.classList.add('active');
    btn.play();
  }
};
