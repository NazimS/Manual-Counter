
let num = document.getElementById("num");
let val = 0;

let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let refresh = document.querySelector(".refresh");

inc.addEventListener("click", () => {
    val++;
    num.textContent = val;
});

dec.addEventListener("click", () => {
    val--;
    num.textContent = val;
});

refresh.addEventListener("click", () => {
    val = 0;
    num.textContent = val;
});