console.log('javascript on!');

let mouseCursor = document.querySelector(".cursor");
let artLinks = document.querySelectorAll(" .container h2");
let sobreLinks = document.querySelectorAll(".info-taboo, .info-taboo ul, .index, .pessoas, .sobre-descricao, .sobre-info, .info");
let mourseCursor = document.querySelector(".cursor2");

window.addEventListener("mousemove", cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

artLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
    });
})

sobreLinks.forEach(link => {
    link.addEventListener("mouseover", () =>{
        mouseCursor.classList.add("link-target");
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-target");
    });
})

 /*
let img1 = document.querySelector(".img-1");
let img2 = document.querySelector(".img-2");
let img3 = document.querySelector(".img-3");
let img4 = document.querySelector(".img-4");

document.addEventListener("mousemove", e => {
    img1.setAttribute(
        "style", "top :" + (e.pageY - 225) + "px; left :" + (e.pageX - 200) + "px"
    );
    img2.setAttribute(
        "style", "top :" + (e.pageY - 225) + "px; left :" + (e.pageX - 200) + "px"
    );
    img3.setAttribute(
        "style", "top :" + (e.pageY - 225) + "px; left :" + (e.pageX - 200) + "px"
    );
    img4.setAttribute(
        "style", "top :" + (e.pageY - 225) + "px; left :" + (e.pageX - 200) + "px"
    );
})*/

