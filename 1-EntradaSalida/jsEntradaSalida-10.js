/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Importe;
	var Porcentaje;
	var Total;
	var Descuento;

	Descuento = 25;
	Importe = document.getElementById('importe').value;
	Importe = parseInt(Importe);

	Porcentaje = Importe*Descuento/100;
	
	Total = Importe - Porcentaje;

	document.getElementById('resultado').value="El resultado es: " + Total;	
}
