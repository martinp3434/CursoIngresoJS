function mostrar()
{
	var Edad;
	Edad = document.getElementById('edad').value;
	Edad = parseInt(Edad);

	if (Edad<13 || Edad>17)
	{
		alert("No es adolecente");		
	}
}