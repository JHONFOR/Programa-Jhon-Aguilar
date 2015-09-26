
$(function()
{
    var preguntas = [];
    var tiempo = 0;
    var cuentaTiempo = 30;
    var numPregunta = 0;
      puntaje=0;
    var cargarJson = function()
    {

        $.getJSON( "js/preguntas.json", function(data)
        {
            preguntas = data;
            cargarPregunta();
        });
    }();

    //Para cargar la pregunta...
    var cargarPregunta = function()
    {
        cuentaTiempo = 30;
        tiempo = setInterval(function()
        {
            cuentaTiempo--;
            $("#tiempo").html(" '" + cuentaTiempo);
            if(cuentaTiempo === 0)
            {
                validar(0);
            }
        }, 1000);

        $("#pregunta").html(preguntas[numPregunta].pregunta);
        //Para cargar las opciones de respuesta...
        for(var i = 1; i <= preguntas[numPregunta].opciones.length; i++)
        {
            $("#opcion_" + i).html(preguntas[numPregunta].opciones[i - 1])
            .click(function(event) {
                var ind = Number(this.id.split("_")[1]);
                validar(ind);
            });
        }
    };
      
     function validar (ind)
    {
        clearInterval(tiempo);

        if (ind === preguntas[numPregunta].correcta)
        {
            swal({title: "!Bien Hecho!",   type: "success"}, function ()
            {
                nuevo();
                puntaje++;

            });
        }
        else
        {
            swal({title: "Ooops",
            text: "La respuesta correcta era: " + preguntas[numPregunta].opciones[(preguntas[numPregunta].correcta)-1] ,
            type: "error"}, function ()
            {
                nuevo();
            });
        }
        $("#titulo").html("Pregunta N°(" + numPregunta + ")");
        $("#puntuacion").html("Puntuación:  "  + puntaje + " de 10");
    }
    var nuevo = function ()
    {
        if(numPregunta + 1 < preguntas.length)
        {
            numPregunta++;
            cargarPregunta();
        }
        else
        {
            swal("Ganaste","Se Acabaron las preguntas ;) ","success");
            $("#base1").delay(2000).fadeOut('slow', function()
            {
                location.reload();


            });

        }
    };
});
