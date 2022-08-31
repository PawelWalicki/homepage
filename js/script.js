console.log("Siema to ja, a new guy ;)");

let button = document.querySelector(".button");
let title = document.querySelector(".title");

button.addEventListener("click", () => {
    if (button.innerText === "inny nagłówek") {
        title.innerText = "ale przystojniak z tego ziomka na zdjęciu :)";
        button.innerText = "poprzedni nagłówek";
    } else {
        title.innerText = "Paweł Walicki"
        button.innerText = "inny nagłówek"
    }
});

console.log(button); //to służy tylko do sprawdzenia czy udało się poprawnie dodać guzik

