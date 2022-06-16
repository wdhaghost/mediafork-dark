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

  
