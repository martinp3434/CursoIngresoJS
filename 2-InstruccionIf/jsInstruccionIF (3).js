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
		alert ("Es menor de edad");
	}  
}