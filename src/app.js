/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let primero = "Un ";
  let adjetivo = ["cartero ", "perro ", "loco ", "desarrollador ", "policia "];
  let verbo = ["se comió mi ", "robó mi ", "quemó mi ", "congeló mi "];
  let objeto = ["tarea ", "coche ", "móvil ", "ordenador ", "altavoz "];
  let place = ["en mi casa", "en la calle", "en el trabajo", "en el parque"];

  let word1 = Math.floor(Math.random() * adjetivo.length);
  let word2 = Math.floor(Math.random() * verbo.length);
  let word3 = Math.floor(Math.random() * objeto.length);
  let word4 = Math.floor(Math.random() * place.length);

  document.querySelector("#excuse").innerHTML =
    primero + adjetivo[word1] + verbo[word2] + objeto[word3] + place[word4];
};
