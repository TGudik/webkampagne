const htmlSwitch = document.querySelector("#HTMLswitch")
const cssSwitch = document.querySelector("#CSSswitch")
const jsSwitch = document.querySelector("#JSswitch")

const htmlCard = document.querySelector(".card.HTML")
const cssCard = document.querySelector(".card.CSS")
const jsCard = document.querySelector(".card.JS")


/* HTML SWITCH TOGGLE */

htmlSwitch.addEventListener("change", () => {
  if (htmlSwitch.checked) {
    if (!jsSwitch.checked) return
    htmlCard.innerHTML = `
        <h3 class="cardHeading">HTML</h3>
        <p class="cardText">HTML (HyperText Markup Language) er grundlaget for en hjemmeside og bruges til at opbygge strukturen på en webside, f.eks. overskrifter, tekst, billeder og links.</p>
    `;
    cssCard.innerHTML = `
        <h3 class="cardHeading">CSS</h3>
        <p class="cardText">CSS (Cascading Style Sheets) bruges til at style hjemmesiden. Det bestemmer blandt andet farver, skrifttyper, layout og hvordan siden ser ud på forskellige skærme.</p>
    `;
    jsCard.innerHTML = `
        <h3 class="cardHeading">JAVASCRIPT</h3>
        <p class="cardText">JavaScript (JS) bruges til at gøre hjemmesider interaktive. Det kan f.eks. håndtere klik på knapper, vise eller skjule indhold og opdatere siden uden at genindlæse den.</p>
    `;
  } else {
    htmlCard.innerHTML = "";
    cssCard.innerHTML = ""
    jsCard.innerHTML = ""
  }

});

/* CSS SWITCH TOGGLE */

cssSwitch.addEventListener("change", () => {
    if (!jsSwitch.checked) return
    if (cssSwitch.checked) {
        htmlCard.classList.add("styled")
        cssCard.classList.add("styled")
        jsCard.classList.add("styled") 
    } else {
        htmlCard.classList.remove("styled");
        cssCard.classList.remove("styled");
        jsCard.classList.remove("styled");
    }

})