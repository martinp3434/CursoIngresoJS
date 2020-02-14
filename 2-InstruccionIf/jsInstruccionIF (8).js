function mostrar()
{
	var Edad;
	var Estadocivil;
	Edad = document.getElementById('edad').value;
	Edad = parseInt(Edad);

	Estadocivil = document.getElementById('estadoCivil').value;

	if (Edad>17 && Estadocivil == "Soltero") 
	{
		alert ("Es soltero y no es menor.");
	}
}