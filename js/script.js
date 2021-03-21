console.log('javascript on!');

let mouseCursor = document.querySelector(".cursor");
let artLinks = document.querySelectorAll(" .container h2");
let sobreLinks = document.querySelectorAll(".info-taboo, .info-taboo ul, .index, .sobre, .pessoas, .sobre-descricao, .info-2, .sobre-info, .info");
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
