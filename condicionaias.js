console.log("Trabalhando com condicionais")

const idadeComprador = 15;
const estaacompanhada = true;

const listaDestinos = new Array (
    `Salvador`,//0
    `São Paulo`,//1
    `Rio de Janeiro`//2
);

listaDestinos.push(`Curitiba`); //Adcionando elementos no Array

console.log("Destinos possíveis:");
console.log(listaDestinos);

if (idadeComprador >= 18 || estaacompanhada == true){
    console.log("Comprador maior de idade!");
    listaDestinos.splice(1,1) //removendo item
}   else{
    console.log("nao e maior de idade e nao posso vender.");
    }
    
console.log("Destinos possíveis:");
console.log(listaDestinos);





