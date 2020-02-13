/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var Ancho;
	var Largo;
	var Perimetro;
	var Alambre;
	var Cantidad;
	var Texto;

	Largo = document.getElementById('Largo').value;
	Largo = parseInt(Largo);
	Largo = Largo * 2;

	Ancho = document.getElementById('Ancho').value;
	Ancho = parseInt(Ancho);
	Ancho = Ancho * 2;

	Perimetro = Largo + Ancho;

	Alambre = 3;
	
	Cantidad = Perimetro * 3;

	Texto = Cantidad + "m de alambre";

	alert ("Se necesitan " + Texto);
}
function Circulo () 
{
	var Radio;
	var Circunferencia;
	var Alambre;
	var Cantidad;
	var Texto;

	Radio = document.getElementById('Radio').value;
	Radio = parseInt(Radio);

	Circunferencia = 2 * Radio * 3.14;

	Alambre = 3;

	Cantidad = Circunferencia * Alambre;

	Texto = Cantidad + "m de alambre";

	alert ("Se necesitan " + Texto);

}
function Materiales () 
{
	var Ancho;
	var Largo;
	var Metro2;
	var Cemento;
	var Cal;
	var Cantcemento;
	var Cantcal;
	var Texto;

	Largo = document.getElementById('Largo').value;
	Largo = parseInt(Largo);

	Ancho = document.getElementById('Ancho').value;
	Ancho = parseInt(Ancho);

	Metro2 = Largo * Ancho;

	Cemento = 2;

	Cantcemento = Cemento * Metro2;

	Cal = 3;

	Cantcal = Cal * Metro2;

	Texto = Cantcemento + " bolsas de cemento y " + Cantcal + " bolsas de cal";

	alert ("Se necesitan " + Texto);
}