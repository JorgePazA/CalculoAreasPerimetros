//Calculo de cuadrado

console.group("Cuadrado");
function  perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();


//Calculo del triangulo
console.group("Triangulo");
function perimetroTriangulo(l1,l2,lb){
    return l1 + l2 + lb;
}
function areaTriangulo(lb,h){
    return ((lb * h)/2);
}
console.groupEnd();

//Calculo del circulo
console.group("Circulo");
let PI = Math.PI;
function perimetroCirculo(radio){
    return 2 * PI * radio;
}
function areaCirculo(radio){
    return PI * radio * radio;
}
console.groupEnd();