$(function()
{
	var inicia = false;
	$("#start").click(function(event)
	{
		$(this).fadeOut('fast', function() {
			setInterval(letraMuestra, 2000);
			inicia = true;
		});
	});

a=10;
	//Para generar letras aleatorias...
	var letraMuestra = function()
	{
		//Se debe obtener una letra aleatoria del alfabeto y ubicarla en una posición aleatoria...
		var numLetra = Math.floor(Math.random() * 26) + 97;
		var posLetra = {
							left : Math.floor(Math.random() * (screen.width - 100)), 
							top  : Math.floor(Math.random() * (screen.height - 150))
						};
		var letraPone = String.fromCharCode(numLetra).toUpperCase();
		var divLetra = "<div class = 'circulo letra_"+(letraPone)+" '" + 
							"style = \"left : "+(posLetra.left)+"px; top : "+(posLetra.top) + 
							"px; background-color: " + randomColor()+"\">" + 
							(String.fromCharCode(numLetra).toUpperCase()) + 
						"</div>";
		$("body").append(divLetra);
         
		var aminacionAlea = ["wobble", "bounceln", "fadeln", "flip", "flash", "jello"];
		var anima = Math.floor(Math.random() * aminacionAlea.length);
		var aleatorio = aminacionAlea[anima];
		console.log(aleatorio);
		//flash, wobble
		$(".letra_" + letraPone).addClass("animated " + aleatorio);
		
		
	
		
	};

	//Para detectar eventos de teclado...
	$(document).keypress(function(event)
	{
		//console.log(event.keyCode, txtLetra);
		if(event.keyCode >= 97 && event.keyCode <= 122 && inicia)
		{
			var letraPresiona = String.fromCharCode(event.keyCode).toUpperCase();
			//Número de ocrrencias de la letra...
			var numVeces = $(".letra_" + letraPresiona).size();
			console.log("Veces letra presionada:", numVeces);
			a++;
			 a=a*numVeces;
			 console.log("puntaje:", a);
			 $("#puntuacion").html("Puntuación: "  + a);
			var aminacionAle = ["fadeOut", "flipOutX", "slideOutUp", "zoomOut"];
		var ani = Math.floor(Math.random() * aminacionAle.length);
		var alea = aminacionAle[ani];
		console.log(alea);
			$(".letra_" + letraPresiona).addClass(alea).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function()
			{
  				$(this).remove();
			});
		}
	});

	var randomColor = function()
	{
    	// from http://www.paulirish.com/2009/random-hex-color-code-snippets/
    	return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
    	(c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
  	};
});