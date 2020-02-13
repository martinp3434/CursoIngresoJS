function mostrar()
{
	var Edad;
	Edad = document.getElementById('edad').value;
	Edad = parseInt(Edad);

	if (Edad>12 && Edad<18)
	{
		alert("Es adolecente");		
	}
}