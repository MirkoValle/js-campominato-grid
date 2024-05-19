const btn = document.querySelector("button");
const gridEl = document.querySelector("section");
const modeEl = document.getElementById("mode");
const mode = modeEl.value;




btn.addEventListener("click", function () {

    gridEl.innerHTML = ""

    for (let index = 0; index < 100; index++) {

        const cellEl = document.createElement("article");
        cellEl.classList.add("cell");
        cellEl.append(index + 1);
        cellEl.addEventListener("click", function () {
            cellEl.classList.toggle("active")
            console.log(index + 1)
        });

        gridEl.appendChild(cellEl);


    }




})