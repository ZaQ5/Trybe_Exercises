// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
    console.log(numbers)
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0
    for(let index = 0; index < numbers.length; index += 1)
    soma = numbers[index] + soma
console.log (soma)

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = 0
soma = 0
    for(let index = 0; index < numbers.length; index += 1)
    soma = numbers[index] + soma
media = (soma/numbers.length)
console.log(media)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
    console.log("média maior do que 20")
} 
else {
    console.log("média menor do que 20")
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0
    for(let index = 0; index < numbers.length; index += 1)
        if (maior < numbers[index]) {
            maior = numbers[index]
        }
console.log("O maior número é:", maior)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let qtdimpar = 0
for(let index = 0; index < numbers.length; index += 1)  
    if ((numbers[index]%2) > 0) {  
        qtdimpar = qtdimpar + 1
    }
console.log("Temos",qtdimpar,"valores impares.")
    if (qtdimpar === 0) {
        console.log("nenhum valor ímpar encontrado")
    }

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = 0
for(let index = 0; index < numbers.length; index += 1)
   if (menor > numbers[index] || menor <= 0) {
       menor = numbers[index] 
   }
console.log("O menor número é:", menor)
// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = []
for(let index = 1; index < 26; index += 1)
    array.push(index)
console.log(array)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let div = 0
for(let index = 0; index < array.length; index += 1)
    console.log(div = (array[index]/2))








