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
const cardModal=document.createElement("div")
cardModal.classList.add("modal")
const cardModalBg=document.createElement("div")
cardModalBg.classList.add("modal-bg")
const cardModalContent=document.createElement("div")
cardModalContent.classList.add("modal-content")
const aboutUs=document.getElementById("services")
const cardModalTitle=document.createElement("h3")
cardModalTitle.classList.add("modal-title")
const cardModalTxt=document.createElement("p")
cardModalTxt.classList.add("modal-text")
const closeBtn=document.createElement("button")
closeBtn.innerHTML="<i class=\"fa fa-times\" aria-hidden=\"true\"></i>"
closeBtn.classList.add("close-button")
const cardModalImg=document.createElement("img")
cardModalImg.classList.add("modal-img")

cardModalContent.appendChild(closeBtn)
cardModalContent.appendChild(cardModalTitle)
cardModalContent.appendChild(cardModalTxt)
cardModalBg.appendChild(cardModalContent)
cardModalBg.appendChild(cardModalImg)
cardModal.appendChild(cardModalBg)
aboutUs.appendChild(cardModal)


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