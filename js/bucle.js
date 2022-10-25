let consulta = prompt("Quiere financiar? si/no").toLowerCase();

if (consulta == "si") {
  const monto = parseInt(prompt("Que monto estas necesitando?"));

  const cuotas = parseInt(
    prompt(
      "Cuantas cuotas? \n 1 cuota 0% \n 3 cuotas 25% \n 6 cuotas 50% \n 12 cuotas 90%"
    )
  );

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

  alert(`El total a devolver es de ${monto * intereses}`);

  if (prompt("Quieres ver el detalle de cada cuota? si/no").toLowerCase() == "si") {
    for(let i = 1; i <= cuotas; i++){
        alert(`La cuota ${i} es de $${(monto * intereses) / cuotas}`)
    } 

  }
}


