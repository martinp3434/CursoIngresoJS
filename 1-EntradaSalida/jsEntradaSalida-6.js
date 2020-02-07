/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	var Primernumero;
	var Segundonumero;
	var Suma;

	Primernumero = document.getElementById('numeroUno').value;
	Primernumero = parseInt(Primernumero);

	Segundonumero = document.getElementById('numeroDos').value;
	Segundonumero = parseInt(Segundonumero);

	Suma = Primernumero+Segundonumero;

	alert("La suma es: " + Suma);
}

