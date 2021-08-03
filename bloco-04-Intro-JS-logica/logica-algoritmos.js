// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 5
let linha = ''
    for (let index = 0; index < n; index += 1) {
        linha += '*'
    }
    for (let index = 0; index < n; index += 1){
        console.log(linha)
    }

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
n = 5
linha = ''
    for (let index = 0; index < n; index += 1) {
    linha += '*'
    console.log(linha)
    }
// Agora inverta o lado do triângulo.
n = 5
    for (let index = 1; index <= n; index += 1) {
        let linha = '';
        for (let ondex = 0; ondex < n - index; ondex += 1){
        linha += ' ';
        }
        for (let condex = 0; condex < index; condex += 1){
            linha += '*';
        }
        console.log(linha)
    }
    // Depois, faça uma pirâmide com n asteriscos de base.
