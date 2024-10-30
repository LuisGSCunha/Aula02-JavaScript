//Valor dos LAdos

let lado1 = 10
let lado2 = 5
let lado3 = 1

if(lado1 == lado2 && lado1 == lado3){
    console.log("Triangulo Equilátero")
}
else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("Triangulo Isósceles")
}else{
    console.log("Triangulo Escaleno")
}