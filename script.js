let modal = document.querySelector(".modal")
let btnCloseForm = document.querySelector(".btn-close")

function closeModal() {
  modal.classList.add("hide")
  modal.classList.remove("show")
}
btnCloseForm.addEventListener("click", closeModal)

function openModal() {
  modal.classList.add("show")
  modal.classList.remove("hide")
}
modal.addEventListener("click", function (e) {
  if(e.target === modal) {
      closeModal()
  }
})
function showModalScroll() {
  if(window.pageYOffset > document.body.scrollHeight / 2) {
    openModal()
    window.removeEventListener("scroll", showModalScroll)
}
}
window.addEventListener("scroll",showModalScroll)



var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});