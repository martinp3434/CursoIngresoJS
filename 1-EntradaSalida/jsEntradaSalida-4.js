/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var Nombre;

	Nombre=prompt("Ingrese su nombre: ");

	document.getElementById('elNombre').value="Su nombre es: " + Nombre;
}

