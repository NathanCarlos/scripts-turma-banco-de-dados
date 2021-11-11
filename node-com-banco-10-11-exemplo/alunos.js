const knex = require('./database-connection');

async function startScript() {
    const alunos = await knex.select('*').from('alunos');
    console.log(alunos[0]);
    const professores = await knex.select('*').from('professores');
    console.log(professores[0]);
    const cursos = await knex.select('nome', 'ativo').from('curso');
    console.log(cursos[0]);
    // const periodosCurso = await knex.raw('SELECT * FROM periodos_curso');
    // console.log(periodosCurso.rows);
    // const alunosComCurso = await knex('alunos')
    // .join('curso', 'alunos.id_curso', '=', 'curso.id')
    // .select('alunos.nome',
    // 'alunos.endereco',
    // 'alunos.email',
    // 'alunos.mensalidade',
    // 'curso.nome as nomeCurso');
    // console.log(alunosComCurso);

    // UPDATE
    // const updateQuery = knex('alunos')
    // .update({ nome: 'Nathan Carlos', endereco: 'Av Paulista, 1550' })
    // .where('id', 2);
    // const resultUpdate = await updateQuery;
    // console.log(resultUpdate, updateQuery.toSQL().toNative());

    // DELETE
    // const deleteResult = await knex('alunos').where('id', 3).del();
    // console.log(deleteResult);

    // INSERT
    // const insertResult = await knex('alunos').insert({
    //     id_curso: 1,
    //     nome: 'ALBERTO',
    //     endereco: 'Av Paulista, 3500',
    //     email: 'alberto@gmail.com',   
    //     mensalidade: '400',
    //     maior_idade: true
    // });
    // console.log(insertResult);
    
}

startScript();