function mostrar()
{
var sexo;

sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo != "m")
{
	alert("reingrese f ó m .");
	sexo = prompt("ingrese f ó m .");
}
alert ("sexo valido");
}

