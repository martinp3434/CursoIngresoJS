function mostrar()
{

	var Acumulador;
	var Contador;
	var Numeroingrersado;
	var Promedio;

	Contador = 0;
	Acumulador = 0;

	while( Contador < 5 )
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

		}

	Promedio = Acumulador / Contador;

	document.getElementById('suma').value = Acumulador;

	document.getElementById('promedio').value = Promedio;
}