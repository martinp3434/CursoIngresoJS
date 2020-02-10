function mostrar()
{
	var Nombre; 
	var Localidad;
	var Primertexto
    var Segundotexto;

    Nombre = document.getElementById('elNombre').value;

    Localidad = document.getElementById('laLocalidad').value;

    Primertexto = "Usted es " + Nombre;

    Segundotexto = " y vive en la localidad de " + Localidad;

	alert(Primertexto + Segundotexto) ;
}

