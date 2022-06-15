// nav mobile
//burger event listener
const button = document.querySelector(".nav-burger")
const navList=document.querySelectorAll(".nav-list .nav-item")


button.addEventListener('click', function (event) {
    for (const navItem of navList) {
    console.log(navItem.innerText)
}event.stopPropagation()

}
)