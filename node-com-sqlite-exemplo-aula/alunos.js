const knex = require('./database-connection');

async function startScript() {
    const alunos = await knex.select('*').from('alunos');
    console.log(alunos);
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
    const insertResult = await knex('alunos').insert({
        nome: 'ALBERTO',
        email: 'alberto@gmail.com',   
        mensalidade: 390,
    });
    console.log(insertResult);
    
}

startScript();