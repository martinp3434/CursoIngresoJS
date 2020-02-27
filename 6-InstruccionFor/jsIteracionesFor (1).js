function mostrar()
{
	var Respuesta;
	var Contador;

	Contador= 0;

	Respuesta=prompt("ingrese si para comenzar a contar");

	for(Respuesta ; Respuesta=="si"; Respuesta=prompt("Quiere continuar?: "))
	{
		if(Contador==10)
		{
			alert("Termino la secuencia")
			break;
		}
		while(!isNaN(Respuesta))
		{
			Respuesta=prompt("Ingrese una respuesta valida: ")
		}
		if(Respuesta=="no")
		{
			alert ("Usted no desea continuar");
		}    	
			Contador++;
			alert(Contador);
	}
}