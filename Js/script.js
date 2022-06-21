// nav mobile
//burger event listener
const burger = document.querySelector(".nav-burger")
const arrow = document.querySelector(".nav-arrow")
const navList=document.querySelector(".nav-list")
const navLink=document.querySelectorAll(".nav-link")

burger.addEventListener('click', function (event) {
  navList.classList.toggle("active")
  arrow.classList.toggle("active")
  burger.classList.toggle("desac")
  document.body.classList.toggle("active")
}
)
arrow.addEventListener('click', function (event) {
    navList.classList.toggle("active")
    arrow.classList.toggle("active")
    burger.classList.toggle("desac")
    document.body.classList.toggle("active")
  }
  )
  
for (const link of navLink) {
  link.addEventListener('click', function (event) {
    navList.classList.remove("active")
    arrow.classList.remove("active")
    burger.classList.remove("desac")
    document.body.classList.remove("active")
    
  }
  )
  
}

// modal service




const aboutUs=document.getElementById("services")
const modal="<div id=\"modal-card\"class=\"modal\"><div class=\"modal-bg\"><div id=\"modal-content\" class=\"modal-content\"><button class=\"close-button\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button><h3 id=\"modal-card-title\" class=\"modal-title\"></h3><p id=\"modal-card-txt\" class=\"modal-text\"></p></div><img id=\"modal-card-img\"class=\"modal-img\" src=\"\"></div></div>"
aboutUs.innerHTML+=modal

const cardModal=document.getElementById("modal-card")
const cardModalTitle=document.getElementById("modal-card-title")
const cardModalTxt=document.getElementById("modal-card-txt")
const cardModalImg=document.getElementById("modal-card-img")
const cardModalContent=document.getElementById("modal-content")


function displayModal(){
  cardModal.classList.toggle("active")
  cardModalTitle.innerText=this.dataset.title
  cardModalTxt.innerHTML=this.dataset.description
  cardModalImg.src=this.dataset.img
}


const cards=document.querySelectorAll(".card")
for (const card of cards) {
 card.addEventListener("click",displayModal)
  
}
cardModalContent.addEventListener("click",function(event){
  
 cardModal.classList.toggle("active")
 event.stopPropagation() 
})