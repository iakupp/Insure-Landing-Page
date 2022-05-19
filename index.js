const navButton = document.querySelector(".nav-button");
const mobileNav = document.querySelector(".mobile-navigation");


let isShowed = false;
navButton.addEventListener("click", toggleNav)
function toggleNav(){
    isShowed = !isShowed;
    if(isShowed){
        navButton.src = "./images/icon-close.svg";
        mobileNav.style.display = "block";
    }else{
        mobileNav.style.display = "none";
        navButton.src = "./images/icon-hamburger.svg";
    }
}
