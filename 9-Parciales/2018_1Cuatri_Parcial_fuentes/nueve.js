
/*b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva



c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.


*/


function mostrar()
{
	var Nombre;
	var Cantpersonas;
	var Cantdias;
	var	Pago;
	var tarjeta;
	var efectivo;
	var QR;
	var contador;
	var Respuesta;
	var Pagomasutilizado;
	var Acumuladordias;
	var Promedio;
	var Cantmaxpersonas;
	var Nombremax;
	var Cantmaxdias;
	var Cantidadmaxpersonas;


	Respuesta="si";

	tarjeta=0;

	efectivo=0;

	QR=0;

	contador=0;

	Acumuladordias=0;
	Cantmaxpersonas=0;

	Nombremax=0;

	Cantmaxdias=0;

	Cantidadmaxpersonas=0;

	while(Respuesta=="si")
	{
		contador++;

		do
		{
			Nombre = prompt("Ingrese un nombre: ");
		}while(!isNaN(Nombre));

		do
		{
			Cantpersonas = prompt("Ingrese la cantidad de personas que se hospedan: ");
			Cantpersonas = parseInt(Cantpersonas);
		}while(isNaN(Cantpersonas)||Cantpersonas==0);

		if(contador==1)
			{
				Cantmaxpersonas=Cantpersonas;
				Nombremax=Nombre
			}else
			{
				if(Cantmaxpersonas<Cantpersonas)
				{
				Cantmaxpersonas=Cantpersonas;
				Nombremax=Nombre
				}
			}

		do
		{
			Cantdias = prompt("Ingrese la cantidad de dias de estancia: ");
			Cantdias = parseInt(Cantdias);
		}while(isNaN(Cantdias)||Cantdias==0);

		if(contador==1)
			{
				Cantmaxdias=Cantdias;
				Cantidadmaxpersonas=Cantpersonas;
			}else
			{
				if(Cantmaxdias<Cantdias)
				{
				Cantmaxdias=Cantdias;
				Cantidadmaxpersonas=Cantpersonas;
				}
			}


		Acumuladordias=Acumuladordias+Cantdias;

		do
		{
			Pago = prompt("Medtodo de pago: Seleccione 1 para efectivo, 2 para tarjeta o 3 para QR");	
			Pago = parseInt(Pago);
		}while(isNaN(Pago)||Pago>3||Pago<1);

		switch(Pago)
		{
			case(1):
			efectivo++;
			break;

			case(2):
			tarjeta++;
			break;

			case(3):
			QR++;
			break;
		}
		if(efectivo>tarjeta)
		{
			if(efectivo>QR)
			{
				Pagomasutilizado="efectivo";
			}
		}else
		{
			if(tarjeta>QR)
			{
				Pagomasutilizado="tarjeta";
			}else
			{
				Pagomasutilizado="QR";
			}
		}
		Respuesta=prompt("Ingres si para continuar ingresando huespedes");
	}	

	Promedio=Acumuladordias/contador;

	document.write("El huesped que trajo mas personas es: "+Nombremax+"<br>");
	document.write("La cantidad de personas que se quedaron mas dias son: "+Cantidadmaxpersonas+"<br>");
	document.write("La forma de pago mas utilizada es: "+Pagomasutilizado+"<br>");
	document.write("El promedio de dias por estadia es: "+Promedio+"<br>");
}
