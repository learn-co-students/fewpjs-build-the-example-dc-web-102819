// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded")

  likeGlyphEls = document.querySelectorAll('span.like-glyph').forEach(function(likeGlyph) {
    likeGlyph.addEventListener('click', likeCallback)
  })

})

function likeCallback(event) {
  mimicServerCall("http://mimicServer.example.com")
  .then(function changeLikeStatus() {
    if (event.target.innerText === EMPTY_HEART) {
      event.target.classList.add("activated-heart")
      event.target.innerText = FULL_HEART;
    }
    else {
      event.target.innerText = EMPTY_HEART
      event.target.classList.remove("activated-heart")
    }
  })
  .catch(function throwError(error) {
    let hiddenEl = document.querySelector('#modal')
    hiddenEl.classList.remove('hidden')
    let errorEl = document.querySelector('p#modal-message')
    errorEl.innerText = error
    // debugger
  })
}

function throwError(error) {
  let hiddenEl = document.querySelector('#modal')
  hiddenEl.classList.remove('hidden')
  let errorEl = document.querySelector('p#modal-message')
  errorEl.innerText = error
  debugger
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
