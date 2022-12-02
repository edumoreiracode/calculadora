
let pantalla = document.getElementById("pantalla")
pantalla.textContent = ""

escribirEnPantalla = (valor)=>{
  pantalla.textContent += valor
}

mostrarResultado = ()=>{
  pantalla.textContent = eval(pantalla.textContent)
}

deletePantalla = ()=>{
  pantalla.textContent = ""
}

deleteUltimo = ()=>{
  cadena = pantalla.textContent
  pantalla.textContent = cadena.substring(0, cadena.length - 1);
}
