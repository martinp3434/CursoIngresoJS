/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Primernumero;
	var Segundonumero;
	var Resultadosuma;

	Primernumero = document.getElementById('numeroUno').value;
	Primernumero = parseInt(Primernumero);

	Segundonumero = document.getElementById('numeroDos').value;
	Segundonumero = parseInt(Segundonumero);

	Resultadosuma = Primernumero + Segundonumero;

	alert("La suma es: " + Resultadosuma);
}

function restar()
{
	var Primernumero;
	var Segundonumero;
	var Resultadoresta;

	Primernumero = document.getElementById('numeroUno').value;
	Primernumero = parseInt(Primernumero);

	Segundonumero = document.getElementById('numeroDos').value;
	Segundonumero = parseInt(Segundonumero);

	Resultadoresta = Primernumero - Segundonumero;

	alert("La resta es: " + Resultadoresta);
}

function multiplicar()
{ 
	var Primernumero;
	var Segundonumero;
	var Resultadomult;

	Primernumero = document.getElementById('numeroUno').value;
	Primernumero = parseInt(Primernumero);

	Segundonumero = document.getElementById('numeroDos').value;
	Segundonumero = parseInt(Segundonumero);

	Resultadomult= Primernumero * Segundonumero;

	alert("La multiplicacion es: " + Resultadomult);	
}

function dividir()
{
	var Primernumero;
	var Segundonumero;
	var Resultadodiv;

	Primernumero = document.getElementById('numeroUno').value;
	Primernumero = parseInt(Primernumero);

	Segundonumero = document.getElementById('numeroDos').value;
	Segundonumero = parseInt(Segundonumero);

	Resultadodiv= Primernumero / Segundonumero;

	alert("La multiplicacion es: " + Resultadodiv);	
}

