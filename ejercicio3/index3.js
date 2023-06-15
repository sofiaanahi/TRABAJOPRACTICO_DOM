let nume1 = document.getElementById("numero1");
let nume2 = document.getElementById("numero2");
let operacion = document.getElementById("operacion");
let btn = document.getElementById("resolver");
let resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
  let numero1 = parseInt(nume1.value);
  let numero2 = parseInt(nume2.value);
  if (operacion.value === "+") {
    resultado.innerHTML = `resultado: ${numero1 + numero2}`;
  }
  if (operacion.value === "-") {
    resultado.innerHTML = `resultado: ${numero1 - numero2}`;
  }
  if (operacion.value === ".") {
    resultado.innerHTML = `resultado: ${numero1 * numero2}`;
  }
  if (operacion.value === ":") {
    resultado.innerHTML = `resultado: ${numero1 / numero2}`;
  }
});
