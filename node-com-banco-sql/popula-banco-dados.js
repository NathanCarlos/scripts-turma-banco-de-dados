const knex = require('./database-connection');

knex.select('*').from('alunos')
.then((alunos) => console.log(alunos))
.catch((err) => console.log(err));

const aluno = {
    nome: 'Ellen',
    email: 'ellen@gmail.com',
    endereco: 'Av Paulista, 3000'
};

knex('alunos').insert(aluno)
.then((data) => console.log(data))
.catch((err) => console.log(err));

knex('alunos').update({ mensalidade: 450 }).where('id', 27)
.then((data) => console.log(data))
.catch((err) => console.log(err));

knex('alunos').where('id', 29).del()
.then((data) => console.log(data))
.catch((err) => console.log(err));

knex('curso').insert({ nome: 'Javascript Pro', ativo: false })
.then((data) => console.log(data))
.catch((err) => console.log(err));