function mostrar()
{
	var Nota;
	Nota = Math.floor(Math.random() * 10) + 1;

	if (Nota>3)
	{
		if(Nota>8)
		{
			alert ("EXELENTE");
		}
		else
		{
			alert ("APROBO");
		}
	}
	else
	{
			alert ("Vamos, la proxima se puede");
	}
}