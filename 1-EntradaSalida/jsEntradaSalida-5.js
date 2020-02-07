/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Nombre;
	var Nombrecomleto;
	var Edad;
	var Edadcompleta;

	Nombre = document.getElementById('velNombre').value;
	console.log(Nombre);
	Nombrecomleto = "Usted se llama "+Nombre;

	Edad = document.getElementById('laEdad').value;
	Edadcompleta = "y tiene "+Edad "años";

	alert(Nombrecomleto + Edadcompleta);

}