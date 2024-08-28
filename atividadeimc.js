const peso= 68
const altura= 1.72

const imc= (peso/(altura*altura))
console.log(imc)

if (imc < 16){
console.log ("Magreza grave")
}
else if(imc >= 16 && imc <= 16.9){
    console.log ("Magreza moderada")
}
else if ( imc >=16.9 && imc <= 18.5 ){
console.log ("Magreza leve")
}
else if ( imc >=18.5 && imc <= 24.9){
    console.log ("Peso ideal")
}
else if ( imc >= 24.9 && imc <= 29.9){
    console.log ("Sobrepeso")
}
else if (imc >= 29.9 && imc <= 34.9){
    console.log ("Obesidade grau I")
}
