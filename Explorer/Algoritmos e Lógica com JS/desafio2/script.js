<<<<<<< HEAD

/*
alert("SEU COMPUTADOR ESTÁ COM VIRUS, CLIQUE AQUI PARA LIMPAR")
const students = [
    {
    name: "junior",
    noteOne: 8.85,
    noteTwo: 9,
    },
    {
    name: "joão",
    noteOne: 4,
    noteTwo: 3,
    },
    {
    name: "maria",
    noteOne: 9,
    noteTwo: 3,
    },
]

function calculateAverage (student){
    let average = (student.noteOne + student.noteTwo) / 2
    return average
}

for(let student of students){
    let average = calculateAverage(student)
    if(average >= 7){
        alert(`A média do estudante ${student.name} foi de ${average.toFixed(2)} \n
        Parabéns você foi aprovado`)
    }else{
        alert(`A média do estudante ${student.name} foi de ${average.toFixed(2)} \n
        sinto muito você foi reprovado`)
    }
}
*/
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
=======
const students = [
    {
    name: "junior",
    noteOne: 8.85,
    noteTwo: 9,
    },
    {
    name: "joão",
    noteOne: 4,
    noteTwo: 3,
    },
    {
    name: "maria",
    noteOne: 9,
    noteTwo: 3,
    },
]

function calculateAverage (student){
    let average = (student.noteOne + student.noteTwo) / 2
    return average
}

for(let student of students){
    let average = calculateAverage(student)
    if(average >= 7){
        alert(`A média do estudante ${student.name} foi de ${average.toFixed(2)} \n
        Parabéns você foi aprovado`)
    }else{
        alert(`A média do estudante ${student.name} foi de ${average.toFixed(2)} \n
        sinto muito você foi reprovado`)
    }
}
>>>>>>> c4cfafbeb35fdc6f4c0270bdeed1ec09422cc7d3
