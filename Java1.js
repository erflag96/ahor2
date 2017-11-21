/*Variables */
var letra ="";
var letrausuario="";
var randomi = Math.random () * (122-97) + 97;
letra = String.fromCharCode (randomi);	
var fallos = "Numero de errores";
alert (letra);

for (var i = 1; i < 6; i++ ){
	letrausuario = prompt ("Introduce una letra", "");

	if (letra == letrausuario) {
		alert ("Lo has Conseguido");
		i=6;
	}else {
		alert("Prueba otra vez");
	}
}