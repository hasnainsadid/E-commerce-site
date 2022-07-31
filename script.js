const bar = document.querySelector("#bar");
const close = document.querySelector(".close");
const navbar = document.querySelector("#navbar");

if(bar){
    bar.addEventListener("click", ()=>{
        navbar.classList.add("active");
        document.querySelector("#mobile").className("hide")
    })
}
if(close){
    close.addEventListener("click", ()=>{
        navbar.classList.remove("active")
    })
}

const main = document.getElementById("mainImage");
const small = document.getElementsByClassName("small-image");
small[0].onclick = function () {
  main.src = small[0].src;
};
small[1].onclick = function () {
  main.src = small[1].src;
};
small[2].onclick = function () {
  main.src = small[2].src;
};
small[3].onclick = function () {
  main.src = small[3].src;
};