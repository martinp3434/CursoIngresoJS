function mostrar()
{

	var numero;

	numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);

	while(numero<0 || numero>10)
	{
		alert ("Reingrese un número entre 0 y 10.")
		numero = prompt("ingrese un número entre 0 y 10.");
		numero = parseInt(numero);
	}	
	alert ("muy bien pelotudo")
}