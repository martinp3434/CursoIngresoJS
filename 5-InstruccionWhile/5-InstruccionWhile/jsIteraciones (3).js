function mostrar()
{

	var clave;
	var contraseña;

	contraseña = "utn750";

	clave = prompt("ingrese el número clave.");

	while(clave != contraseña)
	{
		alert ("Contraseña incorrecta");
		clave = prompt("ingrese el número clave.");
	}
	alert ("Contraseña correcta");
}
