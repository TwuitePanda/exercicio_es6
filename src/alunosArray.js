// Criando um array de objetos com o nome e a nota dos alunos
let alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Lucas', nota: 4 }
];

// Exibindo o array de alunos original no console
console.log('Array de alunos:');
console.log(alunos);

// Função para retornar apenas os alunos com nota maior ou igual a um certo limite
function filtrarAlunos(arrayAlunos, limiteNota) {
    return arrayAlunos.filter(aluno => aluno.nota >= limiteNota);
}

// Chamando a função e exibindo o resultado
let limiteNota = 6; // Definindo o limite de nota
let alunosAprovadosArray = filtrarAlunos(alunos, limiteNota);

// Exibindo os alunos aprovados no console
console.log(`Alunos com nota maior ou igual a ${limiteNota}:`);
alunosAprovadosArray.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
});
