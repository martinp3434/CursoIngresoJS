function mostrar()
{
	var Edad;
	Edad = document.getElementById('edad').value;
	Edad = parseInt(Edad);

	if (Edad>17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		if (Edad<12)
		{
			alert("Es niño");		
		}
		else
		{
			alert ("Es adolecente");
		}	
	}
}