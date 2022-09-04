{
    const welcome = () => {
        console.log("Siema to ja, a new guy ;)");
    }

    const toggleTitle = () => {
        const button = document.querySelector(".js-container__button");
        const title = document.querySelector(".js-container__title");

        if (button.innerText === "Inny nagłówek") {
            title.innerText = "ale przystojniak z tego ziomka na zdjęciu :)";
            button.innerText = "Poprzedni nagłówek"
        } else {
            title.innerText = "Paweł Walicki"
            button.innerText = "Inny nagłówek"
        }
        button.addEventListener("click", toggleTitle);
    }    

    welcome();
}
