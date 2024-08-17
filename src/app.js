// /* eslint-disable */
import "bootstrap";
import "./style.css";
var inputcantidad = document.getElementById("input-cantidad");
var btndraw = document.getElementById("btn-draw");
var btnsort = document.getElementById("btn-sort");
var divdraw = document.getElementById("muestraCartas");
var divbubble = document.getElementById("bubble");
var palo = ["♦", "♥", "♠", "♣"];
var valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var color = "";
var cartas = [];
var i = 0;
// var constructor = "";
var palorandom = "";
var valorrandom = "";
var cantuser = 0;
var fila = 0;
var columna = "";

window.onload = function() {
  //write your code here
};

btndraw.addEventListener("click", draw);
btnsort.addEventListener("click", sortearCartas);
// btnsort.addEventListener("click", dibujar);

function draw() {
  // constructor = "";
  cartas = [];
  let cantidadingresada = parseInt(inputcantidad.value);
  divdraw.innerHTML = "";
  divbubble.innerHTML = "";
  divbubble.style.display = "none";

  for (i = 0; i < cantidadingresada; i++) {
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

    divdraw.insertAdjacentHTML("beforeend", constructorCarta);

    // divbubble.insertAdjacentHTML("beforeend", constructorCarta);

    palorandom = Math.floor(Math.random() * palo.length);
    valorrandom = Math.floor(Math.random() * valor.length);

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
    cartas.push(palo[palorandom], valor[valorrandom], palo[palorandom]);
    cantuser = cantidadingresada;
    // constructor = constructorCarta;
  }
}

// // function prueba() {
// //   divbubble.style.display = "grid";

// //   for (let j = 0; j < cantuser; j++) {
// //     let constructor = `<div
// //     class="card text-center border-white border-1 rounded-2 shadow-lg"
// //     style="width: 80px; height: 130px;"
// //   >
// //     <div
// //       class="card-header text-start fs-5 bg-white border-white rounded-2 p-1"
// //     >
// //       <div id="palocabb${j}"></div>
// //     </div>
// //     <div
// //       class="card-body fw-bold fs-4 d-flex text-center justify-content-center align-items-center p-1"
// //     >
// //       <div id="numerob${j}"></div>
// //     </div>
// //     <div
// //       class="card-footer text-end fs-5 bg-white border-white rounded-2 p-1"
// //     >
// //       <div id="palopieb${j}"></div>
// //     </div>
// //   </div>`;
// //     divbubble.insertAdjacentHTML("beforeend", constructor);
// //     let index = 1;}

function sortearCartas() {
  divbubble.style.display = "grid";
  let index = 1;
  let wall = cartas.length - 1; //iniciamos el wall o muro al final del array
  for (wall = cartas.length - 1; wall > 3; wall -= 3) {
    for (index = 1; index < wall; index += 3) {
      //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
      if (cartas[index] > cartas[index + 3]) {
        fila++;
        let aux = cartas[index];
        let cab = cartas[index - 1];
        let pie = cartas[index + 1];
        cartas[index] = cartas[index + 3];
        cartas[index + 3] = aux;
        cartas[index - 1] = cartas[index + 2];
        cartas[index + 2] = cab;
        cartas[index + 1] = cartas[index + 4];
        cartas[index + 4] = pie;
        dibujar(cartas);
      }
    }
  }
}
//       for (let j = 0; j < cantuser; j++) {
//         let constructor = `<div
//   class="card text-center border-white border-1 rounded-2 shadow-lg"
//   style="width: 80px; height: 130px;"
// >
//   <div
//     class="card-header text-start fs-5 bg-white border-white rounded-2 p-1"
//   >
//     <div id="palocabb${j}-${fila}"></div>
//   </div>
//   <div
//     class="card-body fw-bold fs-4 d-flex text-center justify-content-center align-items-center p-1"
//   >
//     <div id="numerob${j}-${fila}"></div>
//   </div>
//   <div
//     class="card-footer text-end fs-5 bg-white border-white rounded-2 p-1"
//   >
//     <div id="palopieb${j}-${fila}"></div>
//   </div>
// </div>`;
//         divbubble.insertAdjacentHTML(
//           "beforeend",
//           `<div class="row">${constructor}</div>`
//         );
//         let valorpalohead = document.getElementById(`palocabb${j}-${fila}`);
//         valorpalohead.textContent = cartas[index - 1];
//         valorpalohead.style.color = color;
//         let valornumero = document.getElementById(`numerob${j}-${fila}`);
//         valornumero.innerHTML = cartas[index];
//         let valorpalofoot = document.getElementById(`palopieb${j}-${fila}`);
//         valorpalofoot.textContent = cartas[index + 1];
//         valorpalofoot.style.color = color;
//       }
// fila++;

//disminuir la pared para optimizar

// eslint-disable-next-line no-console

// eslint-disable-next-line no-console
console.log(cartas);

// let arr3 = [];

// for (i = 0; i < 3; i++) {
//   arr3.push(cartas[i]);
// }

// let cartabubble = `<div
//         class="card text-center border-white border-1 rounded-2 shadow-lg"
//         style="width: 80px; height: 130px;"
//       >
//       ${arr3}
//         </div>`;

// divbubble.insertAdjacentHTML("beforeend", cartabubble);

function dibujar(nuevoarr) {
  let columna = `<div class="row">
                      <div class="col-2">
                        <div
                            class="card text-center border-white border-1 rounded-2 shadow-lg"
                            style="width: 80px; height: 130px;"
                         >
  ${nuevoarr}
     </div>
    </div>
  </div>`;

  divbubble.insertAdjacentHTML("beforeend", columna);
}

// function agregaFila(fila) {
//   for (let j = 0; j < fila; j++) {
//     let cartabubble = `
//                         <div
//                             class="row" id="${j}"
//                          >
//                          ${dibujar()}
//   </div>`;
//     divbubble.insertAdjacentHTML("beforeend", cartabubble);
//   }
//   divbubble.style.display = "grid";
// }
