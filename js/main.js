const burgerBtn = document.querySelector(".burger-btn")
const nav = document.querySelector(".nav")
const allNavItems = document.querySelectorAll('.nav__item')


function showNav () {
    nav.classList.toggle("nav--active")
    handleNavItems()
}

function closeNav() {
    nav.classList.remove("nav--active")
}

const handleNavItems = () => {
    let delayTime =0;

    allNavItems.forEach(item =>{
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.'+delayTime+'s';
        delayTime++
    })
}

burgerBtn.addEventListener("click", showNav)
nav.addEventListener("click", closeNav)