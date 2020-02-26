function mostrar()
{

	var respuesta;
	var contador;
	var contadorpositivo;
	var contadornegativo;
	var Acumuladorpositivo;
	var Acumuladornegativo;
	var Contadordorcero;
	var Modulo;
	var Contadorpar;
	var Promediopositivos;
	var Promedionegativos;
	var diferencia;

	respuesta ='si';

	contador = 0;

	contadorpositivo = 0;

	contadornegativo = 0;

	Acumuladornegativo = 0;

	Acumuladorpositivo = 0;

	Contadordorcero = 0;

	Contadorpar = 0;

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
		if(Numeroingrersado == 0)
		{
			Contadordorcero ++;
		}else
		{
			if(Numeroingrersado > 0)
			{
				contadorpositivo ++;
				Acumuladorpositivo = Acumuladorpositivo + Numeroingrersado;
			}else
			{
				contadornegativo ++;
				Acumuladornegativo = Acumuladornegativo + Numeroingrersado;
			}

			Modulo = Numeroingrersado % 2;

			if(Modulo == 0)
			{
				Contadorpar ++;
			}
		}

		Promedionegativos = Acumuladornegativo / contador;

		Promediopositivos = Acumuladorpositivo /contador;

		diferencia = Acumuladorpositivo - Acumuladornegativo;

		respuesta = prompt("Quiere continuar? ");
	}

	console.log ("suma de negativos: " + Acumuladornegativo);

	console.log ("Cantidad de negativos: " + contadornegativo);

	console.log ("Promedio de negativos : " + Promedionegativos);

	console.log ("suma de positivos: " + Acumuladorpositivo);

	console.log ("Cantidad de positivos: " + contadorpositivo);

	console.log ("Promedio de positivos: " + Promediopositivos);
	
	console.log ("Cantidad de ceros: " + Contadordorcero);

	console.log ("Cantidad de pares: " + Contadorpar);

	console.log ("La diferencia es: " + diferencia);
}
