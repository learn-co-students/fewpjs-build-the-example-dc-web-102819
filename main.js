// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  let glyphs = Array.from(document.getElementsByClassName('like-glyph'));
  
  glyphs.forEach( glyph => {
    glyph.addEventListener('click', clickGlyph);
  });
})

function clickGlyph(event) {
  mimicServerCall().then(response => 
    switchHeart(event)).catch(error => displayModal(error));
}

function switchHeart(event) {
  if (event.target.classList.contains('activated-heart')) {
    event.target.innerText = EMPTY_HEART;
    event.target.classList.remove('activated-heart');
  } else {
    event.target.innerText = FULL_HEART;
    event.target.setAttribute('class', 'activated-heart');
  }
}

function displayModal(error) {
  let errorModal = document.getElementById('modal');
  let errorParagraph = document.getElementById('modal-message');
  errorModal.classList.remove('hidden');
  errorParagraph.innerText = error;
  // debugger

  setTimeout(function () { errorModal.setAttribute('class', 'hidden') }, 5000);
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
