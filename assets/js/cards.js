const htmlSwitch = document.querySelector("#HTMLswitch")
const cssSwitch = document.querySelector("#CSSswitch")
const jsSwitch = document.querySelector("#JSswitch")

const htmlCard = document.querySelector(".card.HTML")
const cssCard = document.querySelector(".card.CSS")
const jsCard = document.querySelector(".card.JS")


/* HTML SWITCH TOGGLE */

if (htmlSwitch.checked) {
    htmlCard.innerHTML = `
    <h3 class="cardHeading">HTML</h3>
    <p class="cardText">HTML (HyperText Markup Language) er grundlaget for en hjemmeside og bruges til at opbygge strukturen på en webside, f.eks. overskrifter, tekst, billeder og links.</p>
    `;
} else {
    htmlCard.remove()
}