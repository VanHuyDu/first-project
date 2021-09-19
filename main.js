// AutoSlide Show
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("content__slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}


// Open Modal
const Btns = document.querySelectorAll('.js-modalBtn')
const modal = document.querySelector('.modal')

function showModal() {
    modal.classList.add('openModal')
}

for(const Btn of Btns) {
    Btn.addEventListener('click',showModal)
}

// Close Modal

function hideModal(){
    modal.classList.remove('openModal')
}

const closeModal = document.querySelector('.js-modal__close')
const closeOutModal = document.querySelector('.modal__content')

closeModal.addEventListener('click',hideModal)
modal.addEventListener('click',hideModal)
closeOutModal.addEventListener('click',function(event){
    event.stopPropagation()
})

