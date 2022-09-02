console.log("Siema to ja, a new guy ;)");

let button = document.querySelector(".containter__button");
let title = document.querySelector(".title");

button.addEventListener("click", () => {
    if (button.innerText === "Inny nagłówek") {
        title.innerText = "ale przystojniak z tego ziomka na zdjęciu :)";
        button.innerText = "Poprzedni nagłówek";
    } else {
        title.innerText = "Paweł Walicki"
        button.innerText = "Inny nagłówek"
    }
});