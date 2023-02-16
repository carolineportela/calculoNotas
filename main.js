'use strict'

const adicionar = document.getElementById('adicionar')

// //adicionando o quadradinho no container, o innerHTML só é bom para objetos que não existem no DOM.
// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML +'<div class ="item"></div>'

// }

//Adicionando os quadrado no container sem o innerHTML 
const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class ="aluno__name">${nome}</h2>
                        <span class="aluno__nota">${nota}</span>`

    if (nome == '' || nota == '') {
        alert('ERRO : Nome ou nota vazio')

    }else if (nota > 10 || nota < 0){
        alert('Erro: Só são válidas notas de 0 a 10')
    }else if (isNaN(nota)){
        alert ('Nota tem que ser um numero')

    } else {
        if (nota >= 5) {
           novaDiv.classList.add('sombraVerde')      
        } else {
            novaDiv.classList.add('sombraVermelha')
        }
        container.appendChild(novaDiv)

    }

}

//essa funcao abaixo serve somente pra chamar a funcao adicionarCard
const handleClick = () => {
    
    const nome = prompt('Digite o nome do aluno')
    const nota = prompt('Digite o nota do aluno')

    adicionarCard(nome,nota)

}

adicionar.addEventListener('click', handleClick)






//Primeiro pedir uma caixa pedindo o nome
//segunda caixa a nota


//Textcontent serve pra colocar elementos sem tag


/*Criando uma função

 function adicionarCard(){
     alert('Ola mundo')
 }

*/

/*Outra maneira de criar uma função,a mesma que a adicionarCard e não precisa do nome function.
const adicionarCard = () => alert ('Ola mundo')
*/