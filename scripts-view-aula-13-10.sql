-- View Tempor�ria(Armazenada na mem�ria ram)
-- View Tempor�ria j� � atualizada quando alguma informa��o � mudada na tabela original

-- Cen�rio de erro pois temos v�rios campos id;
create view carros_concessionaria as 
select * from carros c
inner join cores c2 on c.id_cor = c2.id
inner join marcas m on c.id_marca = m.id
inner join vendedores v on c.id_vendedor_responsavel = v.id;

-- Cen�rio correto quando tem muitos joins(passar colunas)
create view carros_concessionaria as 
select c.id, c.id_marca, c.id_cor, c.id_vendedor_responsavel,
c.nome, c.valor, c.semi_novo, c.kilometragem as km, c.ano_versao,
c.ano_modelo, m.nome as marca, c2.nome as cor, v.nome as vendedor
from carros c
inner join cores c2 on c.id_cor = c2.id
inner join marcas m on c.id_marca = m.id
inner join vendedores v on c.id_vendedor_responsavel = v.id;

select * from carros_concessionaria;
select * from carros_concessionaria where marca = 'Chevrolet';
select * from carros_concessionaria order by km;

select * from carros;

insert into carros values
(default, 1, 1, 1, 'Novo Onix Plus', 85000, false, 0, 2021, 2022, default, default);

delete from carros where id = 25;

-- View Materializada(� armazenada no disco, ou seja hd.)
-- Quando temos atualiza��o de dados, o programador deve fazer a atualiza��o
-- Ou rodando refresh
-- Vantagem da materializada � que voc� n�o perde a view quando fecha a sess�o/conex�o
-- N�o podemos alterar uma view

create materialized view carros_concessionaria_2 as 
select c.id, c.id_marca, c.id_cor, c.id_vendedor_responsavel,
c.nome, c.valor, c.semi_novo, c.kilometragem as km, c.ano_versao,
c.ano_modelo, m.nome as marca, c2.nome as cor, v.nome as vendedor
from carros c
inner join cores c2 on c.id_cor = c2.id
inner join marcas m on c.id_marca = m.id
inner join vendedores v on c.id_vendedor_responsavel = v.id
with data;

select * from carros_concessionaria_2;

insert into carros values
(default, 1, 1, 1, 'Novo Onix Plus', 85000, false, 0, 2021, 2022, default, default);

refresh materialized view carros_concessionaria_2;

delete from carros where id = 25;

