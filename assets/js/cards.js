const htmlSwitch = document.querySelector("#HTMLswitch");
const cssSwitch = document.querySelector("#CSSswitch");
const jsSwitch = document.querySelector("#JSswitch");

const htmlCard = document.querySelector(".card.HTML");
const cssCard = document.querySelector(".card.CSS");
const jsCard = document.querySelector(".card.JS");

const switchWrap = document.querySelectorAll(".switch")

const images = [
  "../assets/images/sliderbillede1.jpg",
  "../assets/images/sliderbillede2.jpg",
  "../assets/images/sliderbillede3.jpg",
];

/* HTML SWITCH TOGGLE */

htmlSwitch.addEventListener("change", () => {
  if (!jsSwitch.checked) return;
  if (htmlSwitch.checked) {
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
    cssCard.innerHTML = "";
    jsCard.innerHTML = "";
  }
});

/* CSS SWITCH TOGGLE */

cssSwitch.addEventListener("change", () => {
  if (!jsSwitch.checked) return;
  if (cssSwitch.checked) {
    htmlCard.classList.add("styled");
    cssCard.classList.add("styled");
    jsCard.classList.add("styled");
  } else {
    htmlCard.classList.remove("styled");
    cssCard.classList.remove("styled");
    jsCard.classList.remove("styled");
  }
});

/* JS SWITCH TOGGLE */
const bg1 = document.querySelector(".bg1")
const bg2 = document.querySelector(".bg2")

let index = 0;
let order = true

bg1.style.backgroundImage = `url(${images[0]})`

let interval = null

function startSlider() {
  if (!interval) {
    slide()
    interval = setInterval(slide, 3500)
  }
}

function stopSlider() {
  clearInterval(interval)
  interval = null
  bg1.style.backgroundImage = "none"
  bg2.style.backgroundImage = "none"
}

function slide() {

  index = (index + 1) % images.length;

  if (order) {
    bg2.style.backgroundImage = `url(${images[index]})`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = `url(${images[index]})`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  order = !order;

}

startSlider()

jsSwitch.addEventListener("change", () => {

  if (!jsSwitch.checked) {
    stopSlider()
    htmlSwitch.disabled = true
    cssSwitch.disabled = true
  } else {
    startSlider()
    htmlSwitch.disabled = false
    cssSwitch.disabled = false
  }

})

switchWrap[0].addEventListener("click", () => {
  if (htmlSwitch.disabled) {

    switchWrap[0].classList.remove("shake")
    switchWrap[0].offsetHeight
    switchWrap[0].classList.add("shake")
  }
})
switchWrap[1].addEventListener("click", () => {
  if (cssSwitch.disabled) {

    switchWrap[1].classList.remove("shake")
    switchWrap[1].offsetHeight
    switchWrap[1].classList.add("shake")
  }
})