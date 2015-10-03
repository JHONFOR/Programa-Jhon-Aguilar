$(function()
{
    var canvas = $('#canvas');
    var context = canvas[0].getContext('2d');
    var numero = "document.getElementById('numero1')";
    var punto = numero.split("");
 
 
    

    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(100, 300);
    context.lineTo(650, 300);
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    //Flecha...
    context.beginPath();
    context.moveTo(640, 290);
    context.lineTo(650, 300);
    context.lineTo(640, 310);
    context.lineTo(640, 290);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = 'black';
    context.fill();
    context.stroke();
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("Amplitud", 60, 30);
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("Tiempo", 660, 300);
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("0", 80, 320);
    context.beginPath();
    context.moveTo(550, 200);
    context.lineTo(0,200);
    
    context.lineWidth = 3;
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath() 
          context.setLineDash([15,25,15,25,15]);
          context.moveTo(0,100);
          context.lineTo(100, 550);
          context.lineWidth = 3;
          context.strokeStyle = "red";
          context.stroke();
     
     
    $("#start").click(function(event)
    {
        console.log(numero[0]);
        for(var i=0; i<6;i++)
        {
            if(punto[i]==1){
          context.beginPath() 
          context.setLineDash([15,25,15,25,15]);
          context.moveTo(0,100);
          context.lineTo(100 , 100);
          context.lineWidth = 3;
          context.strokeStyle = "red";
          context.stroke();
          }
            if(punto[i]==0){
           context.beginPath() 
          context.setLineDash([0,10]);
          context.moveTo(0,100);
          context.lineTo(400, 100);
          context.lineWidth = 3;
          context.strokeStyle = "red";
          context.stroke();
            }
        }
        
    });


});
