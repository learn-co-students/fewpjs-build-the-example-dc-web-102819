// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(){
  
  const myNodeList = document.querySelectorAll(".like")
  myNodeList.forEach(childNode => {
    childNode.addEventListener("click", changeImage)
  })
})

function changeImage(e){
  mimicServerCall()
  .then(function(success){
    if (e.target.innerText === EMPTY_HEART){
    e.target.innerText = FULL_HEART
    e.target.classList.add("activated-heart")
    }
    else{
    e.target.innerText = EMPTY_HEART 
    e.target.classList.add("nothing") 
    }
    alert(success)
  })
  .catch(function(error) {
    alert(error)
  });
 
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
