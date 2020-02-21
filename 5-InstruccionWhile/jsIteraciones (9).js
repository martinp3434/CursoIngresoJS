function mostrar()
{

	var respuesta='si';
	var contador;
	var numeromax;
	var numeromin;

	contador = 0;

	while( respuesta == "si" )
	{
		
		Numeroingrersado = prompt("ingrese un numero");
		Numeroingrersado = parseInt(Numeroingrersado);

		contador ++;

		while(isNaN(Numeroingrersado))
		{
			Numeroingrersado = prompt("No sea puto, ingrese un numero");
			Numeroingrersado = parseInt(Numeroingrersado);
		}

		if (contador == 1)
		{
			numeromax = Numeroingrersado;
			numeromin = Numeroingrersado;
		}else
		{
			if( Numeroingrersado < numeromin )
			{
				numeromin = Numeroingrersado;
			}else
			{
				if(Numeroingrersado > numeromax)
				{
					numeromax = Numeroingrersado
				}
			}
		}
		respuesta = prompt("Quiere continuar? ");
	}

	document.getElementById('maximo').value = "El numero maximo es: " + numeromax;

	document.getElementById('minimo').value = "Enumeromin;
}
