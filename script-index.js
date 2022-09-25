let sonidoDisparo=new Audio("sonidos/disparo.mp3");




function ocultarJugar()
{
    document.getElementById("jugar-acercade").style.display="none";
    document.getElementById("nombre-jugador").style.display="block";
}
function ocultarNombre()
{   
    var texto= document.getElementById("nombre").value;
    var alerta= document.getElementById("texto");
    if(texto.trim().length>0)/*Lo que hace es eliminar los espacios en blanco */
    {
        document.getElementById("nombre-jugador").style.display="none";
        document.getElementById("tipo-juego").style.display="grid";
    }
    else
    {
        alerta.textContent="Te crees muy listo? Escribe tu nombre";
        document.getElementById("alert").style.display="grid";
        document.getElementById("nombre").value="";
    }
    
}
function ocultartodo()
{
    document.getElementById("inicio").style.display="none";
    document.getElementById("juego").style.display="grid";
}
function ocultarAcerca()
{
    var alerta= document.getElementById("texto");
    alerta.textContent="Juego desarrolado por Xavier Medina. El Ahrocado. Proyecto realizado Para el Challenge II de Oracle One en colaboracion con Alura Latam";
    document.getElementById("alert").style.display="grid";
}
function ocultaralerta()
{
    document.getElementById("alert").style.display="none";
}