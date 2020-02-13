function mostrar()
{
	var Precio;
	var Descuento;
	var Porcentaje;
	var Total;

	Precio = prompt("Ingrese el precio del producto: ");
	Precio = parseInt(Precio);

	Descuento = prompt("Ingrese Descuento: ");
	Descuento = parseInt(Descuento);

	Porcentaje = Precio * Descuento / 100;

	Total = Precio - Porcentaje;

	document.getElementById('elPrecioFinal').value = "El precio final es: " Total;

}

