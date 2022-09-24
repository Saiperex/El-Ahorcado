/* Creando Arrays de palabras*/
const animales=["zorro","leopardo","aguila","abeja","avestruz","lemur","gorila","avispa","bufalo","calamar","camaleon","cangrejo","canguro","castor","ciervo","colibri","conejo","cuervo","chimpance","escorpion","golondrina","hamster","hiena","halcon","hormiga","flamenco","jabali","koala","mapache","murcielago","nutria","paloma","tiburon","tucan"];
const frutas=["manzana","pera","sandia","naranja","uva","papaya","mandarina","mango","guanabana","fresa","cereza","frambuesa","zarzamora","maracuya","melon","durazno","toronja","arandano","kiwi","litchi"];
const verduras=["apio","berenjena","betabel","brocoli","calabaza","cebolla","chicharo","maiz","frijol","espinaca","esparrago","zanahoria","tomate","lechuga","jitomate","pepino","patata","pimiento","guisantes","alcachofa"];
const programacion=["variable","alura","array","canvas","html","oracle","github","css","input","java","figma","codigo","python","display","id","return"];
/*Creando Array de Arrays */
const arreglo= [animales,frutas,verduras,programacion]
/*Funcion random que va del 0 al 3 */

function identidicadorArray() /*Devuelve un nro del 0 al 3 que identifican el array */
{
    var numero=Math.round(Math.random()*3);
    return numero;
}
/*Buscar la palabra en el respectivo array de manera random*/
function consiguiendoPalabra()
{
    var indexI=identidicadorArray();
    var largoJ=arreglo[indexI].length;
    var indexJ=Math.round(Math.random()*(largoJ-1));
    return arreglo[indexI][indexJ];
}
/*variable de la palabra*/
var palabraSecreta="";
/*Hacer que el boton jugar devuelva la palabra */
function botonJugando()
{
    palabraSecreta=consiguiendoPalabra()
    console.log(palabraSecreta);
}