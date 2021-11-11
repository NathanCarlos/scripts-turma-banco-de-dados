const { ObjectId } = require('mongodb');
const connection = require('./database');

connection.then(async (client) => {
    const database = client.db('concessionaria');
    const collectionCarros = database.collection('carros');

    const query = { nome: 'Onix' };
    const carro = await collectionCarros.findOne(query);
    console.log(carro);

    // Quantidade de carros.
    const countCarros = await collectionCarros.find().count();
    console.log(countCarros);

    // Carros por marca.
    const carrosPorMarca = await collectionCarros.find({ $and: [{ valor: { $gte: 60000 }}, { valor: { $lte: 100000 }}]}).toArray();
    console.log(carrosPorMarca);

    // Inserir Carro
    const retornoInsercao = await collectionCarros.insert({
        nome: '320i f30 2',
        marca: 'BMW',
        cor: 'Preto',
        valor: 98000,
        kilometragem: 26000,
        anoVersao: 2018,
        anoModelo: 2018,
        dataInclusao: '2021-05-05'
    });

    // Atualizar Carro
    const retornoAtualizacao = await collectionCarros.updateOne({ _id: ObjectId('60ac5148235a45a366e3de4e') }, { $set: { cor: 'Prata' } });

    console.log(retornoInsercao.insertedIds, retornoAtualizacao.upsertedCount);

})
.catch((err) => {
    console.log(err);
});
