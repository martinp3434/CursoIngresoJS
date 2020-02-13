/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Nombre;
	var Nombrecomleto;
	var Edad;
	var Edadincompleta;
	var Edadcompleta;

	Nombre = document.getElementById('elNombre').value;
	console.log(Nombre);
	Nombrecomleto = "Usted se llama "+Nombre;

	Edad = document.getElementById('laEdad').value;
	Edadincompleta = " y tiene "+Edad;
	Edadcompleta = Edadincompleta + " años";

	alert(Nombrecomleto + Edadcompleta);

}