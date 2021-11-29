// QUERY SELECTORS

// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);

// CLICK EVENTS
// ------------------------------------------------------

const questionContainer = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// console.log(response);
// console.log(btn1, btn2);

questionContainer.addEventListener("click", () => {
  //   questionContainer.style.background = "red";
  //   questionContainer.style.border = "3px solid teal";
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  //   console.log("click");
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  //   console.log("click");
  response.classList.add("show-response");
  response.style.background = "red";
});

// ------------------------------------------------------
// Mouse Events
const mouseMove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  // console.log("hello");
  // console.log(e); --> e récupère les données de l'évènement
  // console.log(e.target); --> log l'objet de ce qui est survolé, donc du body
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
  // le cercle suit la souris
});

window.addEventListener("mousedown", () => {
  // console.log("test");
  mouseMove.style.transform = "scale(2) translate(-25% -25%)";
});

window.addEventListener("mouseup", () => {
  // console.log("test");
  mouseMove.style.transform = "scale(1) translate(-50% -50%)";
  mouseMove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  // console.log("test");
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// -------------------------------------------------------
// keypress events

const keypressContainer = document.querySelector(".keypress");
// console.log(keypressContainer);

const key = document.getElementById("key");
// console.log(key);

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
  // va jouer le son à chaque fois que l'on appuie sur une touche
};

document.addEventListener("keypress", (e) => {
  // console.log("yes");
  // console.log(e); --> nous affiche les objets
  // console.log(e.key); --> ca nous affiche la lettre tapée
  key.textContent = e.key;
  // on rend à l'écran la lettre tapée sur le clavier
  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "red";
  } else {
    keypressContainer.style.background = "green";
  }
  if (e.key === "z") {
    ring(e.key);
  }
  // on ne joue que z.mp3
});

// -----------------------------------------------------
// scroll event

const nav = document.querySelector("nav");
// console.log(nav);

window.addEventListener("scroll", () => {
  // console.log("hello");
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    // révèle la navigation
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});
// la navigation apparaît et disparaît

// -----------------------------------------------------
// form event

const inputName = document.querySelector('input[type = "text"]');
// console.log(inputName); --> on récupère l'endroit ou on met son nom

let pseudo = "";

inputName.addEventListener("input", (e) => {
  // console.log("yes");
  // console.log(e.target.value);
  // --> savoir ce qui a été tapé dans l'input
  pseudo = e.target.value;
});
