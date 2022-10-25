const monto = document.getElementById("monto");
const button = document.getElementById("button");
const cuotas = document.getElementById("cuotas");
const adeudado = document.getElementById("adeudado");
const tasaInteres = document.getElementById("interes");
const card = document.getElementById("card");

function calculo(monto, cuotas) {
  let intereses;

  switch (cuotas) {
    case 1:
      intereses = 1;
      break;

    case 3:
      intereses = 1.25;
      break;

    case 6:
      intereses = 1.5;
      break;

    case 9:
      intereses = 1.7;
      break;

    case 12:
      intereses = 1.9;
      break;

    case 24:
      intereses = 2.5;
      break;

    case 48:
      intereses = 4;

      break;
  }

  const pepito = Math.ceil((intereses - 1) * 100);
  tasaInteres.innerHTML = pepito + "%";

  for (let i = 0; i < parseInt(cuotas.value); i++) {
    console.log(i);
    card.appendChild(`
        <text>${(monto.value * intereses) / parseInt(cuotas.value)}</text>
    `);
  }

  return monto * intereses;
}

button.addEventListener("click", function () {
  if (cuotas.value === "cuotas") {
    console.log("Debe ingresar una cantidad de cuotas validas");
  } else {
    // Conversion a tipo monedo mediante busqueda en google
    const total = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 1,
    });
    adeudado.innerHTML = total.format(
      calculo(monto.value, parseInt(cuotas.value))
    );
  }
});

