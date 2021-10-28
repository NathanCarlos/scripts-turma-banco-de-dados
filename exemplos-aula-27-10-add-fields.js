db.produtos.find();

// Lucro = preco produto - custo;
// $multiply, $divide, $subtract, $add
db.produtos.aggregate([
    {
        $addFields: {
            lucroSimples: { $subtract: ['$preco', '$custo'] },
            precoTotal: { $multiply: ['$preco', '$quantidade'] },
            custoTotal: { $multiply: ['$custo', '$quantidade'] },
            custoEPreco: { $add: ['$custo', '$preco'] },
            precoProduto5x: { $divide: ['$preco', 5] }
        }
    },
    {
      $addFields: {
            lucroTotal: { $subtract: ['$precoTotal', '$custoTotal'] }
        }
    }
]);



// $sum, $avg, $min, $max, $concatArrays


db.alunos.aggregate([
    {
        $addFields: {
            notas: { $concatArrays: ['$notas', [7, 8]] }
        }
    },
    {
        $addFields: {
            mediaNota: { $avg: '$notas' },
            totalNotas: { $sum: '$notas' },
            manorNota: { $min: '$notas' },
            maiorNota: { $max: '$notas' }
        }
    }
]);


