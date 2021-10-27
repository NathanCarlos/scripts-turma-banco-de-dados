db.tarefas.find();

db.createCollection('prioridade_tarefas');

db.prioridade_tarefas.insertMany([
    { _id: 1, descricao: 'MUITO BAIXA' },
    { _id: 2, descricao: 'BAIXA' },
    { _id: 3, descricao: 'MÉDIA' },
    { _id: 4, descricao: 'ALTA' },
    { _id: 5, descricao: 'MUITO ALTA' },
]);
    
db.createCollection('tarefas');


db.tarefas.insertMany([
    { prioridade: 1, descricao: 'Enviar relatório de custos para o gestor Y', recompensa: 300, entregue: false },
    { prioridade: 1, descricao: 'Enviar relatório de custos para o gestor X', recompensa: 600, entregue: true },
    { prioridade: 3, descricao: 'Desenvolver landing page do site X', recompensa: 1500, entregue: true },
    { prioridade: 4, descricao: 'Desenvolver landing page do site Y', recompensa: 1600, entregue: true },
    { prioridade: 3, descricao: 'Desenvolver funcionalidade do site XY', recompensa: 1900, entregue: false },
    { prioridade: 5, descricao: 'Desenvolver funcionalidade para o time de banco de dados', recompensa: 2500, entregue: true },
    { prioridade: 2, descricao: 'Enviar integração dos serviços de pagamento', recompensa: 790, entregue: false },
    { prioridade: 2, descricao: 'Desenvolver tela do produto Y', recompensa: 300, entregue: true },
    { prioridade: 5, descricao: 'Ajustar integração do serviços de pagamento atual do sistema X', recompensa: 970, entregue: true }
    ]);
    
// Exercício 1
db.tarefas.aggregate(
    [{
        $lookup: {
          from: 'prioridade_tarefas',
          localField: 'prioridade',
          foreignField: '_id',
          as: 'prioridade'
        }},
        {
            $unwind: {
              path: '$prioridade'
        }}]
);
        
// Exercício 2)
db.tarefas.aggregate([{
    $lookup: {
        from: 'prioridade_tarefas',
        localField: 'prioridade',
        foreignField: '_id',
        as: 'prioridade'
    }
}, {
    $unwind: {
        path: '$prioridade'
    }
}, {
    $group: {
        _id: '$prioridade.descricao',
        total: {
            $sum: '$recompensa'
        }
    }
}]);

// Exercício 3)

db.tarefas.aggregate([{
    $match: {
        entregue: true
    }
}, {
    $lookup: {
        from: 'prioridade_tarefas',
        localField: 'prioridade',
        foreignField: '_id',
        as: 'prioridade'
    }
}, {
    $unwind: {
        path: '$prioridade'
    }
}, {
    $group: {
        _id: '$prioridade.descricao',
        total: {
            $sum: '$recompensa'
        }
    }
}]);

// Exercício 4)

db.tarefas.aggregate([
    {$lookup: {
      from: 'prioridade_tarefas',
      localField: 'prioridade',
      foreignField: '_id',
      as: 'prioridade'
    }}, {$unwind: {
      path: '$prioridade'
    }}, {$group: {
      _id: '$prioridade.descricao',
      total: {
        $sum: '$recompensa'
      }
    }}, {$sort: {
      total: 1
    }}
]);
    
// Exercício 5)
db.tarefas.aggregate([
    {$lookup: {
      from: 'prioridade_tarefas',
      localField: 'prioridade',
      foreignField: '_id',
      as: 'prioridade'
    }}, {$unwind: {
      path: '$prioridade'
    }}, {$group: {
      _id: '$prioridade.descricao',
      media: {
        $avg: '$recompensa'
      }
    }}
]);
    
// Exercício 6)
db.tarefas.aggregate([
    {$lookup: {
      from: 'prioridade_tarefas',
      localField: 'prioridade',
      foreignField: '_id',
      as: 'prioridade'
    }}, {$unwind: {
      path: '$prioridade'
    }}, {$group: {
      _id: '$prioridade.descricao',
      menorRecompensa: {
        $min: '$recompensa'
      }
    }}
]);

// Exercício 7)
db.tarefas.aggregate([
    {$lookup: {
      from: 'prioridade_tarefas',
      localField: 'prioridade',
      foreignField: '_id',
      as: 'prioridade'
    }}, {$unwind: {
      path: '$prioridade'
    }}, {$group: {
      _id: '$prioridade.descricao',
      maiorRecompensa: {
        $max: '$recompensa'
      }
    }}
]);
    
// Exercício 8)
db.tarefas.aggregate([
    {$lookup: {
      from: 'prioridade_tarefas',
      localField: 'prioridade',
      foreignField: '_id',
      as: 'prioridade'
    }}, {$unwind: {
      path: '$prioridade'
    }}, {$project: {
      descricao: 1,
      recompensa: 1,
      prioridadeTarefa: '$prioridade.descricao'
    }}
]);
