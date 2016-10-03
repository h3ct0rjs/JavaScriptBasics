//Aprendiendo JavaScript basico una semana.

//..............CADENAS................
//Hay algunos metodos que son soportados y que ya son por default ellos son :

//indexOf(): busca una cadena dentro de otra. 
//str.repeat(n): repite un texto str n veces.
//str[ki]: accede al caracter en la posicion iesima.
//str.slice(min, max): muestra los caractes entre el valor minimos sin incluir el maximo.
//str.replace("old","new"): Reemplaza en una cadena str el valor old por un nuevo valro new.
//str.search("valuetofind"): busca por el valor a encontrar en la cadena str, devuelve la posicion i. 
//str.substr(min,l): returns from min with length l
//str.substring(): parecido a slice()
//str.toLowerCase(): convierte texto a minuscula
//str.toUpperCase(): convierte texto a mayuscula
//str.concat(valuetoconcatenate): concatenar strings, se puede usar + entre strings.
//str.split("dd"): convierte un string a un array usando el delimitador dd.
//typeof(var): determina el tipo de dato.
//str.trim(): elimina los espacios en blanco en la izquierda y en la derecha.

//Impresiones en la consola de JavaScript.
console.log("Hello World");
console.clear();  //Esto limpia la consola de Js
var nombre= "Hector";   //no es necesario declarar las variables.

var cadena="Hola Mundo Soy";

console.log(cadena+", "+nombre);

console.log("El tamaño es Saludo:"+cadena.length)
var resultado=cadena.indexOf(nombre)
if(resultado == -1){
  console.log("El nombre Noesta en la Cadena");
}
else{
  console.log("El nombre Esta en la posicion " + resultado); 
}
//Tambien es posible acceder al string como un array de c++. es inseguro no todos los navegadores lo soportan.
//console.log(nombre[0])
//console.log(nombre.length);
console.log(nombre[nombre.length- 5]);  //Soporta operaciones dentro del array! :)
/*Se soporta comentario de bloque como en c++*/
//El metodo replace reemplaza en una cadena
var nombre2="Beatriz X";
console.log(nombre2.replace("X","S"));  //Reemplazo X por S.
console.log(nombre2.slice(2,5))         //Se puede acceder a valore especificos.
console.log(nombre2[4])             //con la opcion de array no puedo mostrar en un rango.
//Es posible convertir cadenas  a minusculas o mayusculas
nombre2=nombre2.toUpperCase();
console.log(nombre2)
nombre2=nombre2.toLowerCase();
console.log(nombre2);
console.log(nombre2.charAt(4));   //Retorna el caracter en la posicion i.

//..............Condicionales.....................

var condicion="12";
var varcondicion=12;
//=== mas eficiente que ==, cadena no es lo mismo que numero.!
if( condicion === varcondicion){    
  console.clear();
  console.log("Hallo Is true");
}
else{
  console.log("Hey Not is Not");
}

//se puede hacer uso de else if igual que en c++
if("Hector"=== toUpperCase("Hector")){
  console.log("This Strings Hector === HECTOR son las mismas");
}
else if("Hector"==="Hector"){
  console.log("Hallo");
}
else{
  console.log(something);
}
