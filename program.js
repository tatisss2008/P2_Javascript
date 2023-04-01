// Comentarios de una linea

/* comentarios 
de varias lineas
*/

//No es necesario declarar una variable antes de utilizarla

//variables de ambito de funcion
var a=34;

//variables de ambito de bloque
let b=56;

//Operaciones: Atirmeticas, comparacion, logica binaria


//Estructuras de datos: Arreglos
//Lineas secuanciales
let c=true;
let d=false;

// console.log(a+b);
// console.log(c && d);
// console.log(c || d);

//Romper la secuencialidad del programa 
//para evitar procesar ciertas lineas del codigo.

//Decision
// if(condicion) {}
// Utilizar decisiones para imprimir la variable con el menor valor
console.log("a="+a+" /  b="+b);
if (a > b)
{    
    console.log("b es menor que a");
}else{
    console.log("a es menor que b");
}


// Definir tres variables y asignarles valores
let n1 = 81;
let n2 = 20;
let n3 = 133;

console.log("---------------");
console.log("n1="+n1+" / n2="+n2+" / n3="+n3);

// Utilizar decisiones para imprimir la variable con el mayor valor
if (n1 > n2 && n1 > n3) {
  console.log("La variable n1 tiene el mayor valor");
} else if (n2 > n1 && n2 > n3) {
  console.log("La variable n2 tiene el mayor valor");
} else {
  console.log("La variable n3 tiene el mayor valor");
}





