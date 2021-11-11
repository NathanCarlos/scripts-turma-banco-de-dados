const knex = require('./database-connection');

async function startScripts() {
    const insertStudents = await knex('alunos').insert({
        nome: 'Otavio',
        email: 'otavio@gmail.com',
        mensalidade: 350
    });
    const students = await knex.select('*').from('alunos');
    console.log(students);
}

startScripts();