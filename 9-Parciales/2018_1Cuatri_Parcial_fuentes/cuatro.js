function mostrar()
{
	var Numerouno;
	var Numerodos;
	var Resta;
	var Suma;
	var Texto;

	Numerouno = prompt("Ingrese un numero");

	Numerodos = prompt("Ingrese otro numero");

	if(Numerouno == Numerodos)
	{
		alert(Numerouno + Numerodos);
	}
	else
	{
		Numerouno = parseInt(Numerouno);
		Numerodos = parseInt(Numerodos);
		if(Numerouno > Numerodos)
		{
			Resta = Numerouno - Numerodos;

			alert (Resta);
		}	
		else
		{
			Suma = Numerouno + Numerodos;

			if(Suma > 10)
			{
				Texto = Suma + " y supero el 10";
				alert ("la suma es "+Texto);
			}
			else
			{
				alert (Suma);
			}
		}
	}
}
