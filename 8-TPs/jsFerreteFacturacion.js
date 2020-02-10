/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var Productouno;
	var Productodos;
	var Productotres;
	var Suma;

	Productouno = document.getElementById('PrecioUno').value;
	Productouno = parseInt(Productouno);

	Productodos = document.getElementById('PrecioDos').value;
	Productodos = parseInt(Productodos);

	Productotres = document.getElementById('PrecioTres').value;
	Productotres = parseInt(Productotres);

	Suma = Productouno + Productodos + Productotres;

	alert("El precio total es: " + Suma);

}
function Promedio () 
{
	var Productouno;
	var Productodos;
	var Productotres;
	var Promedio;

	Productouno = document.getElementById('PrecioUno').value;
	Productouno = parseInt(Productouno);

	Productodos = document.getElementById('PrecioDos').value;
	Productodos = parseInt(Productodos);

	Productotres = document.getElementById('PrecioTres').value;
	Productotres = parseInt(Productotres);

	Promedio = (Productouno + Productodos + Productotres)/3;

	alert("El promedio del precio es: " + Promedio);	
}
function PrecioFinal () 
{
	var Productouno;
	var Productodos;
	var Productotres;
	var Suma;
	var Iva;
	var Preciofinal;
	var Total;

	Productouno = document.getElementById('PrecioUno').value;
	Productouno = parseInt(Productouno);

	Productodos = document.getElementById('PrecioDos').value;
	Productodos = parseInt(Productodos);

	Productotres = document.getElementById('PrecioTres').value;
	Productotres = parseInt(Productotres);

	Suma = Productouno + Productodos + Productotres;

	Iva = 21;

	Preciofinal = Suma * Iva / 100;

	Total = Suma + Preciofinal;

	alert("El precio total mas Iva es: " + Total);
	
}