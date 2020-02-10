
function mostrar()
{
	var Ancho;
	var Largo;
	var Perimetro;
	var perimetrocompleto;

	Largo = prompt("Ingrese el largo del rectangulo: ");
	Largo = parseInt(Largo);

	Ancho = prompt("Ingrese el largo del rectangulo: ");
	Ancho = parseInt(Ancho);

	Perimetro = (2*Largo) +(2*Ancho);

	perimetrocompleto = Perimetro+"m";

	alert ("El perimetro es : "+ perimetrocompleto);
}


