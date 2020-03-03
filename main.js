const btn = document.querySelector("button");
const li = document.querySelectorAll("li");

let size = 10;
let good = true;

const changeLi = function () {

    size++;

    for (let i = 0; i < li.length; i++) {

        if (good) {
            for (let i = 0; i < li.length; i++) {

                li[i].style.display = "block";
            }
            good = !good;
        }
        else {
            li[i].style.fontSize = size + "px";
        }



    }


}

btn.addEventListener("click", changeLi);