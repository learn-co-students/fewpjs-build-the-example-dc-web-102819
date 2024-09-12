// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
addErrorClass()
document.addEventListener('DOMContentLoaded', () => {
  addEventListenersToLikes(activateLikes)
})

function addErrorClass() {
  modal = document.getElementById("modal")
  modal.className = "hidden"
}


function addEventListenersToLikes(action) {
  let likeBtns = document.getElementsByClassName("like-glyph")
  for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", action)
  }
}

function activateLikes(event) {
  mimicServerCall()
  .then(function() {
    let heart = event.target
    heart.innerText = FULL_HEART
    heart.className = "activated-heart"
    heart.removeEventListener('click', activateLikes)
    heart.addEventListener('click',deactivateLikes)
    console.log('success!')
  })
  .catch(function(error){
    modal = document.getElementById("modal")
    modal.className = null
    setTimeout(addErrorClass, 5000)
    console.log('oops')
  })

  function deactivateLikes(event){
    let heart = event.target
    heart.innerText = EMPTY_HEART
    heart.className = null
    heart.removeEventListener('click', deactivateLikes)
    heart.addEventListener('click', activateLikes)
    console.log('unliked!')
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
