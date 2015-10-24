window.onload = function()
{
	
	var canvas = nom_div("canvas");
    var context = canvas.getContext('2d');
    var dimensiones = {
    	w : 760,
    	h : 500
    };
    
    var canyon = nom_div("canyon");
    context.drawImage(canyon, (dimensiones.w / 2) - 75, (dimensiones.h / 2),  150, 200 ); 
    var ubicaBall = [100, (dimensiones.w / 2) - 25, dimensiones.w  - 105 ];

    function nom_div(id)
    {
    	return document.getElementById(id);
    }
     var posBolaPuso = [];
     var balls = [];
     var existe=false;
     var y=0;
     var esferasMuestra = [];
     for(var i=1; i<=3; i++)
     {
         balls.push({src : nom_div("bola_" + i)});
         
           var posbola = Math.floor(Math.random() * 3);   
         
         
        // posBolaPuso.push(posbola);
         context.drawImage(balls[i - 1].src, ubicaBall[posbola], y, 50, 50);

        
         
      }

           context.drawImage(balls[0].src, (dimensiones.w / 2) - 25, (dimensiones.h / 2) - 35, 50, 50);
           
          // context.drawImage(balls[1].src, 345, 0, 50, 50);
           //context.drawImage(balls[2].src, 100 , 0, 50, 50);
         //  context.drawImage(balls[0].src, 600, 0, 50, 50);

           context.font = "normal 20px Arial";
           context.fillStyle = "blue";
           context.fillText("00", 0, 20);  
            

          for(var i = 0; i < esferasMuestra.length; i++)
          {
              i += 5;
               context.drawImage(balls[i - 1].src, 50, 50, 50);
          }  


}