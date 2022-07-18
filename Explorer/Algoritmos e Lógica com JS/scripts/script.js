<<<<<<< HEAD
/*
let nome = prompt("Qual o seu nome?")

alert("Olá, " + nome)
let idade = prompt("Qual a sua idade?")

alert("você tem " + idade)

============================================================================


let numerOne = prompt("Digite o primeiro numero")
let numerTwo = prompt("Digite o segundo numero ")
let result = Number(numerOne) + Number(numerTwo)
alert("Resultado é: " + result)


let firstNumer = prompt("Digite o primeiro numero ")
let secondNumber = prompt("Digite o secundo numero")

firstNumer = Number(firstNumer)
secondNumber = Number(secondNumber)

const sum = firstNumer + secondNumber
const sub = firstNumer - secondNumber
const mult = firstNumer * secondNumber
const div = firstNumer / secondNumber
const restDiv = firstNumer % secondNumber

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + mult)
alert("Divisão: " + div)
alert("resto da divisao: " + restDiv)
*/

/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/
/*
Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.



let option
let items = []
while(option != 3){
    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))

    switch(option){
        case 1:
            let item = prompt(`Digite o nome do item `)
            items.push(item)
            break
        case 2:
            if(items[0] == null){//ou items.length == 0
                alert(`Não existe nenhum item cadastrado`)
            }else{
                alert(items)
            }
            break
        case 3:
            alert("programa encerrado, até mais :)")
            break
        default:
            alert("opção inválida, tente novamente")
    }

    
}
*/

/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const pacientes = [
    {
        nome: "junior",
        idade: 19,
        peso: 72,
        altura: 180,
    },
    {
        nome: "joao",
        idade: 22,
        peso: 90,
        altura: 170,
    },
    {
        nome: "fulano",
        idade: 30,
        peso: 100,
        altura: 160,
    },
    {
        nome: "gabriel",
        idade: 22,
        peso: 73,
        altura: 175,
    },
]

function IMC(peso, altura){
    return (peso / ((altura / 100)** 2)).toFixed(2)
}

function printIMC (paciente){
    return` 
        o paciente ${paciente.nome} tem o IMC de ${IMC(paciente.peso, paciente.altura)}
       `
}

for(let paciente of pacientes){
    let mensagem = printIMC(paciente)
    alert(mensagem)
=======
/*
let nome = prompt("Qual o seu nome?")

alert("Olá, " + nome)
let idade = prompt("Qual a sua idade?")

alert("você tem " + idade)

============================================================================


let numerOne = prompt("Digite o primeiro numero")
let numerTwo = prompt("Digite o segundo numero ")
let result = Number(numerOne) + Number(numerTwo)
alert("Resultado é: " + result)


let firstNumer = prompt("Digite o primeiro numero ")
let secondNumber = prompt("Digite o secundo numero")

firstNumer = Number(firstNumer)
secondNumber = Number(secondNumber)

const sum = firstNumer + secondNumber
const sub = firstNumer - secondNumber
const mult = firstNumer * secondNumber
const div = firstNumer / secondNumber
const restDiv = firstNumer % secondNumber

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + mult)
alert("Divisão: " + div)
alert("resto da divisao: " + restDiv)
*/

/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/
/*
Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.



let option
let items = []
while(option != 3){
    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))

    switch(option){
        case 1:
            let item = prompt(`Digite o nome do item `)
            items.push(item)
            break
        case 2:
            if(items[0] == null){//ou items.length == 0
                alert(`Não existe nenhum item cadastrado`)
            }else{
                alert(items)
            }
            break
        case 3:
            alert("programa encerrado, até mais :)")
            break
        default:
            alert("opção inválida, tente novamente")
    }

    
}
*/

/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const pacientes = [
    {
        nome: "junior",
        idade: 19,
        peso: 72,
        altura: 180,
    },
    {
        nome: "joao",
        idade: 22,
        peso: 90,
        altura: 170,
    },
    {
        nome: "fulano",
        idade: 30,
        peso: 100,
        altura: 160,
    },
    {
        nome: "gabriel",
        idade: 22,
        peso: 73,
        altura: 175,
    },
]

function IMC(peso, altura){
    return (peso / ((altura / 100)** 2)).toFixed(2)
}

function printIMC (paciente){
    return` 
        o paciente ${paciente.nome} tem o IMC de ${IMC(paciente.peso, paciente.altura)}
       `
}

for(let paciente of pacientes){
    let mensagem = printIMC(paciente)
    alert(mensagem)
>>>>>>> c4cfafbeb35fdc6f4c0270bdeed1ec09422cc7d3
}