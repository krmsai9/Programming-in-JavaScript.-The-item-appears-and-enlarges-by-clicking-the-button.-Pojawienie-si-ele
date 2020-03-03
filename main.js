const btn = document.querySelector("button");
const li = document.querySelectorAll("li");

let size = 10;
let good = true;

const changeLi = function () {

    size++;

    li.forEach(element => {

        if (good) {
            li.forEach(disp => {

                disp.style.display = "block";

            });

            good = !good;
        }
        else {
            element.style.fontSize = size + "px";
        }
    });


}

btn.addEventListener("click", changeLi);