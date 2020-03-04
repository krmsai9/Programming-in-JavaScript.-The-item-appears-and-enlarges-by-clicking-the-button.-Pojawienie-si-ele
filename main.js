const btn = document.querySelector("button");
const liItems = [...document.querySelectorAll("li")];

let size = 10;
let good = true;

const changeLi = function () {

    liItems.forEach(liItem => {
        liItem.style.display = "block";
        liItem.style.fontSize = `${size}px`;
    });
    size++;
}

btn.addEventListener("click", changeLi);