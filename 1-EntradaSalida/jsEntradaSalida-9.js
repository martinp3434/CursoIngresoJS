/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var Importe;
	var Porcentaje;
	var Total;
	var Descuento;

	Descuento = 10;
	Importe = document.getElementById('sueldo').value;
	Importe = parseInt(Importe);

	Porcentaje = Importe*Descuento/100;
	
	Total = Importe + Porcentaje;

	document.getElementById('resultado').value="El resultado es: " + Total;
}
