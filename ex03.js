//Valor dos Lados

let lado1 = 10
let lado2 = 5
let lado3 = 1
// Calcular Formas Dos Triangulos
if(lado1 == lado2 && lado1 == lado3){
    console.log("Triangulo Equilátero")
}
else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("Triangulo Isósceles")
}else{
    console.log("Triangulo Escaleno")
}
