// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// function hiddenModal() {
//   document.getElementById('modal').classList.add('hidden')
// }
let hearts = document.getElementsByClassName('like-glyph')
for (let heart of hearts) {
  heart.addEventListener('click', clickHeart)
}

function clickHeart(event) {
  let heart = event.target
  let mimic = mimicServerCall()
  mimic.then(success => heart.innerText = FULL_HEART, heart.classList.add('activated-heart'))
  .catch(error => document.getElementById('modal').classList.remove('hidden'))
  setTimeout(function(){document.getElementById('modal').classList.add('hidden')}, 5000)
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
