/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var Lampara;
	var cant;
	var Precio;
	var Descuento;
	var Porcentaje;
	var Texto;

	cant = document.getElementById('Cantidad').value;
	cant = parseInt(cant);

	Lampara = document.getElementById('Marca').vaule;

	Precio = 35;

	Descuento = 0;

	if (cant > 5)
	{
		Descuento = 50;
	}else
	{
		if (cant == 5 && Lampara != "ArgentinaLuz")
		{
			Descuento = 30;
		}else
		{
			Descuento = 40;
		}
	}
	if(cant == 4 && Lampara != "ArgentinaLuz" || Lampara != "FelipeLamparas" )
	{
		Descuento = 20;
	}else
	{
		Descuento = 25;
	}
	if(cant == 3 && Lampara == "ArgentinaLuz")
	{
		Descuento = 15;
	}else
	{
		if(Lampara != "FelipeLamparas")
		{
			Descuento = 5;
		}else
		{
			Descuento = 10;
		}
	}
	Porcentaje = Precio * Descuento / 100;
	Precio = Precio - Descuento;
	if(Precio > 119)
	{
		Descuento = 10
		Porcentaje = Precio * Descuento / 100;
		Precio = Precio + Descuento;
		Texto = Precio + " de IIBB";
		document.getElementById('precioDescuento').vaule = "Usted pago " + Texto ;
	}
	document.getElementById('precioDescuento').vaule = Precio;
}