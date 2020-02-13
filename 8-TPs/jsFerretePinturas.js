/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Farenheit;
	var Celcius;
	var Textouno;
	var Textodos;

	Farenheit = document.getElementById('Temperatura').value;
	Farenheit = parseInt(Farenheit);

	Celcius = 5/9 * (Farenheit - 32);

	Textouno = Farenheit + " Farenheit son ";
	Textodos = Celcius + " centígrados";

	alert (Textouno + Textodos);


function CentigradosFahrenheit () 
{
	var Farenheit;
	var Celcius;
	var Textouno;
	var Textodos;

	Celcius = document.getElementById('Temperatura').value;
	Celcius = parseInt(Celcius);

	Farenheit = (Celcius + 1,8) + 32;

	Textouno = Celcius + " centígrados son ";
	Textodos = Farenheit + " centígrados";

	alert (Textouno + Textodos);
}
