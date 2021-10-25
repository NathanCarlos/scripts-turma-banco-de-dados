db.produtos.find();

db.categorias.find();

// SELECT * FROM PRODUTOS P INNER JOIN CATEGORIAS C ON P.CATEGORIA = C._ID
db.produtos.aggregate([
    {
        $lookup: {
            from: 'categorias',
            localField: 'categoria',
            foreignField: '_id',
            as: 'categoria'
        }
    },
    {
        $unwind: {
            path: '$categoria'
        }
    }
]);
    
// Project -> projetar novos campos / remover campos
// 0 -> não exibe campo, 1 -> exibe campo

db.produtos.aggregate([
    // stage 1
    {
        $lookup: {
            from: 'categorias',
            localField: 'categoria',
            foreignField: '_id',
            as: 'categoria'
        }
    },
    // stage 2
    {
        $unwind: {
            path: '$categoria'
        }
    },
    // stage 3
    {
        $project: {
            _id: 1,
            descricao: 1,
            preco: 1,
            categoriaDescricao: '$categoria.descricao',
            precoVenda: 1,
            urlImagem: 1
        }
    }
]);
   
// Project condicional
// $ne, $eq, $lte, $lt, $gt, $gte
db.produtos.aggregate([
    // stage 1
    {
        $lookup: {
            from: 'categorias',
            localField: 'categoria',
            foreignField: '_id',
            as: 'categoria'
        }
    },
    // stage 2
    {
        $unwind: {
            path: '$categoria'
        }
    },
    // stage 3
    {
        $project: {
            _id: 1,
            descricao: 1,
            preco: 1,
            categoriaDescricao: '$categoria.descricao',
            precoVenda: 1,
            imagem: {
                $cond: {
                    if: { $eq: ['$urlImagem', ''] },
                    then: '$$REMOVE',
                    else: '$urlImagem'
                }
            },
            vendido: {
                $cond: {
                    if: { $gte: ['$precoVenda', 0] },
                    then: true,
                    else: false
                }
            },
            lucro: {
                $cond: {
                   if: { $gt: ['$precoVenda', '$preco'] },
                   then: true,
                   else: false
                }
            }
        }
    }
]);
