// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('like-glyph')) {
        console.log('Article ID: ' + e.target.parentElement.parentElement.parentElement.parentElement.id)
        let spanToChange = e.target
        mimicServerCall()
        .then(() => changeHeart(spanToChange))
        .catch(()=> showErrorModal())
      }
    })
})

function getHeartSpanEl() {
  return document.querySelector('.like-glyph')
}

function getArticlesEl() {
  return document.querySelector('.media-post')
}

function getLikeLiEls() {
  return document.getElementsByClassName('like')
}

function getErrorModalEl() {
  return document.querySelector('#modal')
}

function showErrorModal() {
  getErrorModalEl().classList.remove('hidden')
  setTimeout(function() {
    getErrorModalEl().classList.add('hidden')
  }, 5000)
}

function changeHeart(heartToChange) {
  console.log(heartToChange)
  if (heartToChange.innerText === EMPTY_HEART) {
    heartToChange.innerText = FULL_HEART
    heartToChange.classList.add('activated-heart')
  } else {
    heartToChange.innerText = EMPTY_HEART
    heartToChange.classList.remove('activated-heart')
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
        reject("Random server error. Try again.")
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
