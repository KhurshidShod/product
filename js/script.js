const navMenu = document.getElementById("navMenu")
const openNav = document.getElementById("openNav")
const closeNav = document.getElementById("closeNav")
const header = document.querySelector("header")
const theme = document.getElementById("theme")

openNav.onclick = () => {
    navMenu.style.top = '0'
}
closeNav.onclick = () => {
    navMenu.style.top = '-150%'
}
window.onscroll = () => {
    if(pageYOffset > 80){
        header.classList.add("shrink")
    } else {
        header.classList.remove("shrink")
    }
}
theme.addEventListener("click", () => {
    document.body.classList.toggle("dark")
});