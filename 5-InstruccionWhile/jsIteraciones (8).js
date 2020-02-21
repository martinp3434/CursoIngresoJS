function mostrar()
{

	var respuesta='si';
	var Acumuladorpositivo;
	var Acumuladornegativo;
	var Numeroingrersado;

	Acumulador = 0;

	Acumuladornegativo = 1;

	Acumuladorpositivo = 0;

	while( respuesta == "si" )
	{
		
		Numeroingrersado = prompt("ingrese un numero");
		Numeroingrersado = parseInt(Numeroingrersado);

		while(isNaN(Numeroingrersado))
		{
			Numeroingrersado = prompt("No sea puto, ingrese un numero");
			Numeroingrersado = parseInt(Numeroingrersado);
		}

		if( Numeroingrersado > 0)
		{
			Acumuladorpositivo = Acumuladorpositivo + Numeroingrersado;
		}else
		{
			Acumuladornegativo = Acumuladornegativo * Numeroingrersado;
		}

		respuesta = prompt("Quiere continuar? ");
	}

	document.getElementById('suma').value = Acumuladorpositivo;

	document.getElementById('producto').value = Acumuladornegativo;
}
