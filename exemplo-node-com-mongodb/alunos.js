const connection = require('./database-config');
const { ObjectId } = require('mongodb');

async function initialize(){
    const client = await connection;
    const database = client.db('lets_code_class');
    const alunos = database.collection('alunos');
    const cursos = database.collection('cursos');

    const todosAlunos = await alunos.find().toArray();
    const todosCursos = await cursos.find().toArray();
    const alunosComCurso = await alunos.aggregate([
        {
            $lookup: {
                from: 'cursos',
                localField: 'curso',
                foreignField: '_id',
                as: 'curso'
            }
        },
        {
            $unwind: {
                path: '$curso'
            }
        }
    ]).toArray();

    console.log(alunosComCurso);

}

initialize();