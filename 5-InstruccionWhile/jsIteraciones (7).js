function mostrar()
{

	var respuesta='si';
	var Acumulador;
	var Contador;
	var Numeroingrersado;
	var Promedio;

	Contador = 0;
	Acumulador = 0;

	while( respuesta == "si" )
		{
			
			Numeroingrersado = prompt("ingrese un numero");
			Numeroingrersado = parseInt(Numeroingrersado);

			while(isNaN(Numeroingrersado))
			{
			Numeroingrersado = prompt("No sea puto, ingrese un numero");
			Numeroingrersado = parseInt(Numeroingrersado);
			}
			Acumulador = Acumulador + Numeroingrersado;	

			Contador = Contador +1;

			respuesta = prompt("Quiere continuar");
		}

	Promedio = Acumulador / Contador;

	document.getElementById('suma').value = Acumulador;

	document.getElementById('promedio').value = Promedio;
}