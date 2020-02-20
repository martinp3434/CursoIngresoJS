function mostrar()
{
	var clave;
	var Contraseña;
	var Contador;

	Contraseña = "utn750";

	clave = prompt("ingrese el número clave.");

	while(clave != Contraseña)
	{
			alert ("Contraseña incorrecta");
			clave = prompt("ingrese el número clave.");
	}
		alert ("Contraseña correcta");
}
