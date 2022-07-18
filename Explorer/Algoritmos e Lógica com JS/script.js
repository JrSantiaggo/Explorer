/*
Media do aluno


let student = prompt("Qual o seu nome? ")
let n1 = prompt("Digite sua primeira nota: ")
let n2 = prompt("Digite sua segunda nota: ")
let n3 = prompt("Digite sua terceira nota: ")

n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)

let average = (n1 + n2 + n3) / 3
average = average.toFixed(2)

let result = average > 6

if (result){
    alert("Parabens " + student + " Você tirou " + average + " e você foi aprovado")
}else{
    alert("Sinto muito " + student + " Você tirou " + average + " e você foi reprovado")
}

=====================================================================================
*/


/* 

Lista de compras
items = []

for(let item = 0; item < 5; item++){
    let itemName = prompt("Digite o item " + (item + 1))
    items[item] = itemName
}

alert(items)


=======================================================================================
*/

/*
Math.random = gera numero aleatório entre 0 e 1
Math.round = arredonda para cima de 5 ou para baixo
Math.ceil = arredonda para cima
Math.floor = arredonda para baixo
Math.random * 10 para deixar entre 0 e 10

Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas


let number = prompt("Advinhe o número que estou pensando, está entre 0 e 10")

number = Number(number)

const randomNumber = Math.round(Math.random() * 10)

let count = 1

while(number != randomNumber){
    number = prompt("Erro, tente novamente: ")
    count++
}

if(count == 1){
    alert(`Parabéns! Você advinhou o número ${randomNumber} em ${count} tentativa`)
}else{
    alert(`Parabéns! Você advinhou o número ${randomNumber} em ${count} tentativas`)
}

============================================================================================
*/




