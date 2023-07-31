const navIcons= document.querySelector("#nav-bars");
const menu = document.querySelector(".mobile-menu");
const navRemove = document.querySelector(".menu-close");{
    navIcons.onclick = () =>{
        menu.classList.add("active");
    };
    navRemove.onclick = () =>{
        menu.classList.remove("active");
    };
}


