'use strict';

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal")
const btnOpenModal = document.querySelectorAll(".show-modal");
//opening the modal box
const openModal = function(){
modal.classList.remove("hidden") ;
overlay.classList.remove("hidden");
}
//closing the modal box
const closeModal = function(){
    modal.classList.add("hidden") ;
    overlay.classList.add("hidden");
    }
//targeting all modal box
for (let i= 0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// closing the modal with an esc key
document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if(e.key === "Escape" && !modal.classList.contains('hidden')){
       closeModal();
    }
    
})