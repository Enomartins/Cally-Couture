const hambugger = document.getElementsByClassName("hambugger");
const nav = document.getElementsByClassName("link-list");

hambugger.addEventListener('click', ()=> { 
    nav.classList.toggle("show");
})