// on écrit le nom d'une fonction en kamelCase

function faireQuelqueChose() {
  console.log("Je fais un truc");
  console.log("trop cool");
}
// OBLIGATOIRE de l'appeler
faireQuelqueChose();

const faireUneTache = (tache) => {
  // c'est une fonction
  console.log("Je fais : " + tache);
};
// faireUneTache("les courses");
// faireUneTache("le ménage");
// tache est le paramètre

// "return" la fonction dans la console, et arrête la fonction
function add2() {
  let a = 4;
  console.log(`a est égal à ${a}`);
  return a + 2;
}
add2();

// version non-fléchée
(function maFonction() {
  console.log("Je me joue toute seule");
})();
// la fonction se joue seule sans qu'on l'appelle

// version fléchée
(() => {
  console.log("Je me joue aussi toute seule");
})();
// fonction anonyme
