// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(){
  flashError();
  addLikeButtonListeners();
})

function addLikeButtonListeners() {
  let likeButtons = document.querySelectorAll(".like-glyph");
  likeButtons.forEach(button => button.addEventListener('click', clickEventLike));
}

function clickEventLike(event){
  let success = true; 
  mimicServerCall()
  .catch(error => { 
    success = false;
    flashError(error)
  })
  .then(() => { if (success) {toggleLike(event)} }) // this is slow to the user
}

function toggleLike(event) {
  if (event.target.innerText === EMPTY_HEART) {
    event.target.innerText = FULL_HEART;
    event.target.classList.add("activated-heart");
  } else {
    event.target.classList.remove("activated-heart");
    event.target.innerText = EMPTY_HEART;
  }
}

function flashError(error) {
  if (error) {
    let message = document.querySelector('#modal');
    message.innerText = error;
    message.classList.remove("hidden");
    setTimeout(flashError, 5000);
  } else {
    document.querySelector('#modal').classList.add("hidden");
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
