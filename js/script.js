const btn = document.querySelector("button");
const gridEl = document.querySelector("section")

btn.addEventListener("click", function () {

    gridEl.innerHTML = ""

    for (let index = 0; index < 100; index++) {
        console.log(index)

        const cellEl = document.createElement("article");
        cellEl.classList.add("cell");
        cellEl.append(index + 1);
        cellEl.addEventListener("click", function () {
            cellEl.classList.add("active")
        });

        gridEl.appendChild(cellEl);


    }




})