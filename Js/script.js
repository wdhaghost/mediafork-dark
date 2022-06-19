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
const cards=document.querySelectorAll(".card")
const cardModal=document.getElementById("card-modal")
const cardModalTitle=document.getElementById("card-modal-title")
const cardModalTxt=document.getElementById("card-modal-txt")
const cardModalImg=document.getElementById("card-modal-img")
const cardModalContent=document.querySelector(".modal-content")

function displayModal(){
  cardModal.classList.toggle("active")
  cardModalTitle.innerText=this.dataset.title
  cardModalTxt.innerHTML=this.dataset.description
  cardModalImg.src=this.dataset.img
  
}

cardModalContent.addEventListener("click",function(event){
 cardModal.classList.toggle("active")
 event.stopPropagation() 
})

for (const card of cards) {
 card.addEventListener("click",displayModal)
  
}



