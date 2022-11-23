mostrarEnPantalla = (valor)=>{
  let pantalla = document.getElementById("pantalla")
  pantalla.textContent += valor
}

mostrarResultado = ()=>{
  let pantalla = document.getElementById("pantalla")
  pantalla.textContent = eval(pantalla.textContent)
}

deletePantalla = ()=>{
  let pantalla = document.getElementById("pantalla")
  pantalla.textContent = ""
}