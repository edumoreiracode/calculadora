
let pantalla = document.getElementById("pantalla")
let pantalla2 = document.getElementById("pantalla2")

pantalla2.textContent = "0"

escribirEnPantalla = (valor)=>{
  pantalla.textContent += valor
}

mostrarResultado = ()=>{
  pantalla2.textContent = eval(pantalla.textContent)
}

deletePantalla = ()=>{
  pantalla.textContent = ""
  pantalla2.textContent = "0"
}

deleteUltimo = ()=>{
  cadena = pantalla.textContent
  pantalla.textContent = cadena.substring(0, cadena.length - 1);
  if(pantalla.textContent == "") {pantalla2.textContent = "0"}
}
