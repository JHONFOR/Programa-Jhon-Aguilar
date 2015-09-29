window.onload = function()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');


    var puntosValor = [[20, 20, 250, 10],
                       [150, 30, 175, 250],
                       [30, 250, 180, 250]];

    var puntosnombre = function(puntos)
    {
        context.beginPath();
        context.moveTo(puntos[0]/2, puntos[1]/2);
        context.lineTo(puntos[2]/2, puntos[3]/2 );
       // context.lineTo(170,125);  
        context.lineWidth = 10;
        context.strokeStyle = randomColor();
        context.stroke();

        context.beginPath();
        context.moveTo(150,140);
          context.lineTo(140, 10);
          context.moveTo(145,80);
          context.lineTo(200, 80);
          context.moveTo(195,10);
          context.lineTo(195, 150);

        context.lineWidth = 10;
        context.strokeStyle = randomColor();
        context.stroke();

        //o
        context.beginPath();
        context.arc(300,70,65,0,2 * Math.PI, false);
        context.lineWidth=10;
        context.strokeStyle = randomColor();
        context.stroke(); 

        //n
        context.beginPath();
        context.moveTo(400 , 140);
        context.lineTo(400,10 );
    
        context.lineTo(470, 130);
        context.lineTo(470, 10);
       // context.lineTo(170,125);  
        context.lineWidth = 10;
        context.strokeStyle = randomColor();
        context.stroke();
         
      
        

    };

    for(var i = 0; i < puntosValor.length; i++)
    {
        puntosnombre(puntosValor[i]);
    }
    function randomColor()
	{
    	// from http://www.paulirish.com/2009/random-hex-color-code-snippets/
    	return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
    	(c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
  	};

};
