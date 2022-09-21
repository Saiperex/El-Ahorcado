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
    }
    else
    {
        alerta.textContent="Te crees muy listo? Escribe tu nombre";
        document.getElementById("alert").style.display="grid";
    }
    
}
function ocultaralerta()
{
    document.getElementById("alert").style.display="none";
}