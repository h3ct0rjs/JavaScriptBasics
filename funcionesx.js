//de codecademy y https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//first grammar, then poetry. hfjimenez at utp dot edu dot co
var variableNombre = function(parametro1) {
  return parametro1 * parametro1;
}

//uso variableNombre(45);
function funcionNombre(parametro2) {
  return parametro2 * parametro2;
}

//uso funcionNombre(45);

function nameString(name) {
  return "Hi, I am" + " " + name;
};
console.log(nameString("Hector"));
//el alcance de las variables puede ser local, o global. si es local
//hace uso de variable local al setear var al inicio. Es una practica
//recomendada.
function foo(number) {
  var x = number + 2;
  console.log(x === 3 ? "Boo es 3" : "Boo no es 3");
}
//si no se usa var tendra el valor de la variable global.
var x = 4; //global
const y = 33; //global constante.
function foo(number) {
  x = number + 2;
  console.log(x === 3 ? "Boo es 3" : "Boo no es 3");
}

/* Function declaration */
// variables,functions in JavaScript is that you can refer to a variable declared
//later, without getting an exception.This concept is known as hoisting;
foo(); // "bar"

function foo() {
  console.log("bar");
}

//se puede usar recursividad.
function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);

//increiblemente se pueden anidar funciones :
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
