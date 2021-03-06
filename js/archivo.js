let calcularVacaciones = document.getElementById('calcularVacaciones')

calcularVacaciones.addEventListener('submit', calcExpenses)

function getValues()  {
  let destino = document.getElementById('destino').value,
      presupuesto = document.getElementById('presupuesto').value,
      transporte = document.getElementById('transporte').value,
      alojamiento = document.getElementById('alojamiento').value,
      comida = document.getElementById('comida').value;

  return { destino, presupuesto, transporte, alojamiento, comida }    

  
}

function calcExpenses(e) {
  e.preventDefault();
  
  const  { destino, presupuesto, transporte, alojamiento, comida } = getValues()

  let gastos = parseInt(alojamiento) + parseInt(transporte) + parseInt(comida)
  let balance = presupuesto - gastos

  UI (destino, presupuesto, balance)
  manejeElClicks()
}

function UI(destino, presupuesto, balance) {
  let result = document.getElementById("result")
  let dataPrint = document.createElement("div")
  
   dataPrint.innerHTML += `
    <div class="container-data row">
      <div class="col s4">
        <h6>${destino}</h6>
      </div>
      <div class="col s4">
        <h6>${presupuesto}</h6>
      </div>
      <div class="col s4">
      <h6 id="balance">${balance}</h6> 
    </div>
  </div>

  `
  result.appendChild(dataPrint) 

  reset()
}

function reset() {
  document.getElementById("calcularVacaciones").reset()
}

function balanceColours() {

  const { balance} = getValues()


    if(balance < 0) {
      document.getElementById("balance").classList.add("red")
    }
    else if(balance > 0) {
      document.getElementById("balance").classList.add("green")
    }
}
//  guardar_localstorage ();

let destino = localStorage.getItem("destino");

function obtener_localstorage() {

  if (localStorage.getItem("pais")){
    let pais =localStorage.getItem("pais");
let destino = JSON.parse( localStorage.getItem("destino"));

console.log(pais);
console.log(destino);

  }else {
    console.log("No hay localStorage")
  }

}


function guardar_localstorage () {
  let destino = {
    pais: "Uruguay",
    distancia:"600km",
    costo: 1000,
    comida: "chivito",
  }
};

localStorage.getItem("pais", JSON.stringify(destino));

function manejeElClicks() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}