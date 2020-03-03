const btn = document.querySelector("button");
const li = document.querySelectorAll("li");

let size = 10;
let good = true;

const changeLi = function () {


    li.forEach(element => {

        if (good) {
            li.forEach(disp => {

                disp.style.display = "block";
                disp.style.fontSize = size;
            });

            good = !good;
        }
        else {
            element.style.fontSize = size + "px";
        }
    });

    size++;

}

btn.addEventListener("click", changeLi);