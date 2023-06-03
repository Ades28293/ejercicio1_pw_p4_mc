function comparacion(opcion) {
  let auxIntentos = 0;
  let auxPuntaje = 0;

  let puntaje = document.getElementById("testPuntaje");
  let intentos = document.getElementById("testIntentos");

  switch (opcion) {
    case "opcion1":
      document.getElementById("texto").innerHTML =
        "Pokémon incorrecto, intentalo nuevamente";
      document.getElementById;

      break;

    case "opcion2":
      document.getElementById("texto").innerHTML =
        "Pokémon incorrecto, intentalo nuevamente";
      break;

    case "opcion3":
      document.getElementById("texto").innerHTML =
        "Pokémon incorrecto, intentalo nuevamente";
      break;

    case "opcion4":
      document.getElementById("texto").innerHTML =
        "Felicitaciones, has seleccionado la opción correcta";
      document.getElementById("imagen1").src = "../img/pcolor.jpg";
      cambiarTexto();
      break;
  }
}



function operacionPokemon() {
  let auxIntentos = 0;
  let auxPuntaje = 0;

  let puntaje = document.getElementById("testPuntaje");
  let intentos = document.getElementById("testIntentos");

  if (auxIntentos == 1) {
    auxPuntaje += 5;

    intentos.innerHTML = auxIntentos;
    puntaje.innerHTML = auxPuntaje;
  } else if (auxIntentos == 2) {
    auxPuntaje += 3;
    intentos.innerHTML = auxIntentos;
    puntaje.innerHTML = auxPuntaje;
  } else if (auxIntentos == 3) {
    auxPuntaje += 1;
    intentos.innerHTML = auxIntentos;
    puntaje.innerHTML = auxPuntaje;
  }
  auxIntentos++;
}

function mostarImagen() {
  document.getElementById("imagen1").src = "../img/pcolor.jpg";
}

function cambiarTexto() {
  let testTexto = document.getElementById("texto");
  testTexto.style.background = "blue";
  testTexto.style.border = "solid";
}
