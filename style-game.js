/* Creando Arrays de palabras*/
const animales=["zorro","leopardo","aguila","abeja","avestruz","lemur","gorila","avispa","bufalo","calamar","camaleon","cangrejo","canguro","castor","ciervo","colibri","conejo","cuervo","chimpance","escorpion","golondrina","hamster","hiena","halcon","hormiga","flamenco","jabali","koala","mapache","murcielago","nutria","paloma","tiburon","tucan"];
const frutas=["manzana","pera","sandia","naranja","uva","papaya","mandarina","mango","guanabana","fresa","cereza","frambuesa","zarzamora","maracuya","melon","durazno","toronja","arandano","kiwi","litchi"];
const verduras=["apio","berenjena","betabel","brocoli","calabaza","cebolla","chicharo","maiz","frijol","espinaca","esparrago","zanahoria","tomate","lechuga","jitomate","pepino","patata","pimiento","guisantes","alcachofa"];
const programacion=["variable","alura","array","canvas","html","oracle","github","css","input","java","figma","codigo","python","display","id","return"];
/*Creando Array de Arrays */
const arreglo= [animales,frutas,verduras,programacion]
/*Variables identificadoras IJ */
let I=0;
let J=0;
/*Creando Arrays de categorias*/ 
const categorias=["Animal","Fruta","Verdura","Programacion"]
/*Funcion random que va del 0 al 3 */
function identidicadorI() /*Devuelve un nro del 0 al 3 que identifican el array */
{
    var numero=Math.round(Math.random()*3);
    return numero;
}
/*Funcion random que devuelve la posicion J segun el largo*/
function identificadorJ()
{
    var largoJ=arreglo[I].length;
    var numero=Math.round(Math.random()*(largoJ-1));
    return numero;
}
/*Buscar la palabra en el respectivo array de manera random*/
function consiguiendoPalabra()
{
    I=identidicadorI();
    J=identificadorJ();
    return arreglo[I][J];
}
/*variable de la palabra*/
var palabraSecreta="";
/*Hacer que el boton jugar devuelva la palabra */
function botonJugando()
{
    palabraSecreta=consiguiendoPalabra()
    console.log(palabraSecreta);
    escribirLi();
    
}
/*Hacer que el boton de pistas te devuelva la categoria*/
function mostrarPista()
{
    document.getElementById("alert").style.display="grid";
    var alerta= document.getElementById("texto");
    alerta.textContent="La palabra está en la categoria: "+categorias[I];
}
/*Cargar li deacuerdo al nro de letras */
function escribirLi()
{
   
    var ul = document.getElementById("letras");
    for(let i=0;i<palabraSecreta.length;i++)
    {
        var newLi = document.createElement("li");
        var id="li"+i;
        var clase="letra";
        newLi.id=id;
        newLi.className=clase;
        ul.appendChild(newLi);
        document.getElementById(id).innerHTML = "🕱";
    }
}
/*Aca si comienza el programa*/
/*hacer que tome la letra y la reemplaze en las calaveritas*/
/*Funcion que toma lo ingresado en el teclado*/
function teclado()
{
    var letra=""
   document.addEventListener("keydown", function(event)
   {
        letra=event.key;
        var contiene=comprobarLetra(letra);
        console.log("la letra es "+letra+" y el valor es "+ contiene);
        mostrarLetrasLi(contiene,letra);
   })
}
/*Funcion que comprueba que esa letra está o no en la palabra */
function comprobarLetra(letra)
{
    var booleano=false;
    if(palabraSecreta.includes(letra))
    {
        booleano=true;
    }
    return booleano
}
function mostrarLetrasLi(valor,letra)
{
    if(valor==true)
    {
        for(let i=0;i<palabraSecreta.length;i++)
        {
            if(palabraSecreta.charAt(i)==letra)
            {
                var id="li"+i;
                console.log("posicion:"+i);
                document.getElementById(id).innerHTML = letra;
            }
        }
    }
}
teclado();