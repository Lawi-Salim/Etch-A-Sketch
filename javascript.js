const container = document.getElementById("container")
const butCell = document.getElementById("btn1")
const resetCell = document.getElementById("btn2")

function createGrille(cell) {
    const widthCell = 100 / cell
    const heightCell = 100 /cell
    container.innerHTML = ""

    for (let i = 0; i < cell; i++) {
        for (let y = 0; y < cell; y++) {
            const grille = document.createElement("div")
            grille.classList.add("sous-grille")
            grille.style.width = `${widthCell}%`
            grille.style.height = `${heightCell}%`
            grille.style.border = "0.01px solid black"
            grille.style.boxSizing = "border-box"
            grille.addEventListener("mouseover", () => {
                const listColor = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta"];
                let randomColor = Math.floor(Math.random() * listColor.length)
                grille.style.background = listColor[randomColor]
            })
            grille.addEventListener("mouseover", () => {
                let currentOpacity = parseFloat(grille.style.opacity) || 1;
                grille.style.opacity = currentOpacity - 0.1 > 0 ? currentOpacity - 0.1 : 0;
            });
            container.appendChild(grille)
        }
    }
}

butCell.addEventListener("click", () => {
    let nbrCell = prompt("Give the number of grids from 1 to 100!");
    
    if (!isNaN(nbrCell) && nbrCell >= 1 && nbrCell <= 100) {
        createGrille(nbrCell);
    } else {
        alert("Please enter a valid number between 1 and 100!");
    }
});

resetCell.addEventListener("click", () => {
    createGrille(container.innerHTML = "")
})
