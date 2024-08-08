/* eslint-disable */
import "bootstrap";
import "./style.css";
var inputcantidad = document.getElementById("input-cantidad");
var btndraw = document.getElementById("btn-draw");
var btnsort = document.getElementById("btn-sort");
var divdraw = document.getElementById("muestraCartas");
var divbubble = document.getElementById("bubble");
var palo = ["♦", "♥", "♠", "♣"];
var valor = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var color = "";
var arr = {};

window.onload = function() {
  //write your code here
};

btndraw.addEventListener("click", draw);

function draw() {
  let cantidadingresada = parseInt(inputcantidad.value);
  divdraw.innerHTML = "";
  divbubble.innerHTML = "";
  let cartas = [];

  for (let i = 0; i < cantidadingresada; i++) {
    let constructorCarta = `<div
          class="card text-center border-white border-1 rounded-2 shadow-lg"
          style="width: 80px; height: 130px;"
        >
          <div
            class="card-header text-start fs-5 bg-white border-white rounded-2 p-1"
          >
            <div id="palocab${i}"></div>
          </div>
          <div
            class="card-body fw-bold fs-4 d-flex text-center justify-content-center align-items-center p-1"
          >
            <div id="numero${i}"></div>
          </div>
          <div
            class="card-footer text-end fs-5 bg-white border-white rounded-2 p-1"
          >
            <div id="palopie${i}"></div>
          </div>
        </div>`;

    // let constructorbubble = `<div class="row p-0 m-0" id="row${j}">
    // ${constructorCarta}
    //     </div>`;
    divdraw.insertAdjacentHTML("beforeend", constructorCarta);
    divbubble.insertAdjacentHTML("beforeend", constructorCarta);

    var palorandom = Math.floor(Math.random() * palo.length);
    var valorrandom = Math.floor(Math.random() * valor.length);

    if (palo[palorandom] === "♦" || palo[palorandom] === "♥") {
      color = "red";
    } else {
      color = "black";
    }
    let valorpalohead = document.getElementById(`palocab${i}`);
    valorpalohead.textContent = palo[palorandom];
    valorpalohead.style.color = color;
    let valornumero = document.getElementById(`numero${i}`);
    valornumero.innerHTML = valor[valorrandom];
    let valorpalofoot = document.getElementById(`palopie${i}`);
    valorpalofoot.textContent = palo[palorandom];
    valorpalofoot.style.color = color;
    // let carta = [palo[palorandom], valor[valorrandom], palo[palorandom]];
    // cartas.push(carta);
  }
}
