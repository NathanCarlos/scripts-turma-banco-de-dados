const connection = require('./database-config');
const { ObjectId } = require('mongodb');

// connection.then((client) => {
//     const databaseConcessionaria = client.db('concessionaria');
//     const collectionCarros = databaseConcessionaria.collection('carros');
//     collectionCarros.find().toArray().then((carros) => {
//         console.log(carros);
//     });
    
// }).catch((e) => console.log(e));

// const initialize = new Promise((resolve) => {
//     resolve('inicializado com sucesso!');
// });

// initialize.then(async() => {
//     const client = await connection;
//     const databaseConcessionaria = client.db('concessionaria');
//     const collectionCarros = databaseConcessionaria.collection('carros');
//     const carros = await collectionCarros.find().toArray();
//     console.log(carros);
// })

async function initialize(){
    const client = await connection;
    const databaseConcessionaria = client.db('concessionaria');
    const collectionCarros = databaseConcessionaria.collection('carros');
    const onix = await collectionCarros.findOne({ _id: ObjectId('61774a1c82e394173170a299') });
    await collectionCarros.insertMany([
        {
            nome: "Golf",
            marca: "Volkwagen",
            cor: "Preto",
            valor: 125000,
            valorVenda: 130000,
            kilometragem: 9800,
            anoVersao: 2018,
            anoModelo: 2019,
            dataInclusao: "2021-04-13"
        },
        {
            nome: "Golf",
            marca: "Volkwagen",
            cor: "Preto",
            valor: 125000,
            valorVenda: 130000,
            kilometragem: 9800,
            anoVersao: 2018,
            anoModelo: 2019,
            dataInclusao: "2021-04-13"
        }
    ]);

    await collectionCarros.updateOne({ _id: onix._id }, { $set: { vendedor: 'Nathan' } });

    const carros = await collectionCarros.find().toArray();
    
    const valorTotalCarros = await collectionCarros.aggregate([
        {
            $group: {
                _id: 1,
                valorTotal: {
                    $sum: '$valor'
                }
            }
        }
    ]).toArray();

    console.log(valorTotalCarros);

    const deleted = await collectionCarros.deleteOne({ _id: ObjectId('61774a1c82e394173170a29a') });
    const totalDeleted = await collectionCarros.deleteMany({ nome: 'Golf' });
    console.log(deleted, totalDeleted);
}

initialize();


// connection.then(async (client) => {
//     const databaseConcessionaria = client.db('concessionaria');
//     const collectionCarros = databaseConcessionaria.collection('carros');
//     console.log(collectionCarros);
//     const carros = await collectionCarros.find().toArray();
//     console.log(carros);
    
// }).catch((e) => console.log(e));