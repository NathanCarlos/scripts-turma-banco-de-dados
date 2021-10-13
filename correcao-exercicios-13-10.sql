select * from carros;

truncate table carros restart identity;

insert into carros 
(nome, id_marca, id_cor, valor, id_vendedor_responsavel, kilometragem, ano_versao, ano_modelo, data_venda)
values 
('Onix', 1, 2, 41000, 1, 10300, 2018, 2019, '2021-04-05'),
('Onix', 1, 1, 41000, 2, 9800, 2018, 2019, '2021-04-13'),
('Cruze', 1, 2, 90000, 3, 12000, 2018, 2018, '2021-03-02'),
('Celta', 1, 3, 20000, 1, 138530, 2019, 2019, '2021-01-03'),
('Polo', 2, 2, 80000, 2, 21938, 2018, 2019, null),
('Jetta', 2, 2, 130000, 1, 9850, 2020, 2020, '2021-02-01'),
('Polo', 2, 1, 82000, 3, 8492, 2019, 2020, null),
('Jetta', 2, 1, 120000, 1, 9389, 2020, 2021, '2021-04-03'),
('Nivus', 2, 1, 100000, 3, 7482, 2020, 2021, '2021-02-25'),
('Nivus', 2, 1, 105000, 4, 4231, 2021, 2021, '2021-03-30'),
('Nivus', 2, 2, 100000, 4, 5232, 2020, 2021, '2021-02-05'),
('Argo', 3, 1, 61000, 5, 5213, 2020, 2021, '2021-01-05'),
('Argo', 3, 2, 55000, 2, 7263, 2021, 2021, '2021-03-05'),
('Argo', 3, 3, 58000, 1, 9813, 2020, 2021, '2021-05-05'),
('Toro', 3, 3, 90000, 3, 8293, 2020, 2021, '2021-02-05'),
('Toro', 3, 4, 87000, 4, 13942, 2019, 2020, '2021-03-05'),
('Kwid', 4, 5, 40000, 5, 8723, 2020, 2021, '2021-03-05'),
('Kwid', 4, 5, 41000, 3, 9283, 2021, 2021, '2021-02-05'),
('Kwid', 4, 3, 39000, 2, 9018, 2020, 2021, '2021-04-05'),
('320i', 5, 2, 170000, 1, 3500, 2021, 2021, '2021-02-05'),
('320i f30', 5, 7, 90000, 4, 39000, 2018, 2018, '2021-05-05'),
('320i', 5, 7, 120000, 5, 28000, 2018, 2019, '2021-05-05');

-- Exercício 1)
select sum(valor) as total from carros;

-- Exercício 2)
select * from carros c
inner join marcas m on c.id_marca = m.id
inner join cores c2 on c.id_cor = c2.id
inner join vendedores v on c.id_vendedor_responsavel = v.id;

-- Exercício 3)
select v.id, v.nome, count(*) as qtd from carros c
inner join vendedores v on c.id_vendedor_responsavel = v.id
group by v.id;

-- Exercício 4)
select v.id, v.nome, sum(valor) as total from carros c
inner join vendedores v on c.id_vendedor_responsavel = v.id
where extract('month' from c.data_venda) = 5
group by v.id;

-- Exercício 5)
select v.id, v.nome, avg(valor) as media from carros c
inner join vendedores v on c.id_vendedor_responsavel = v.id
where extract('month' from c.data_venda) = 4
group by v.id;

-- Exercício 6)
select extract('month' from c.data_venda) as month, sum(valor) from carros c
group by month
order by month;

-- Exercício 7)
select extract('month' from c.data_venda) as month, v.id, v.nome, count(*) 
from carros c
inner join vendedores v on c.id_vendedor_responsavel = v.id
group by month, v.id
order by v.nome;

-- Exercício 8)
select c2.id, c2.nome, count(*) from carros c
inner join cores c2 on c.id_cor = c2.id
group by c2.id
order by c2.nome;

-- Exercício 9)

select * from carros c
inner join marcas m on c.id_marca = m.id
inner join cores c2 on c.id_cor = c2.id
inner join vendedores v on c.id_vendedor_responsavel = v.id
where c.valor > 35000 and c.valor < 60000;

-- Exercício 10)
select c.nome, avg(c.valor) from carros c
group by c.nome
order by c.nome;

-- Exercício 11)
select c.ano_versao, avg(c.valor) from carros c
group by c.ano_versao
order by c.ano_versao;

-- Exercício 12)
select m.id, m.nome, avg(c.valor) from carros c
inner join marcas m on c.id_marca = m.id
group by m.id
order by m.nome;

-- Exercício 13)
select m.id, m.nome, avg(c.valor) from carros c
inner join marcas m on c.id_marca = m.id
group by m.id
having avg(c.valor) > 68000
order by m.nome;

-- Exercício 14)
select * from carros;
update carros set semi_novo = false
where kilometragem > 30000;

-- Exercício 15)
alter table vendedores
add column data_demissao date;

-- Exercício 16)
update vendedores set data_demissao = '2021-04-15'
where id = 5;

-- Exercício 17)
select v.id, v.nome, sum(c.valor) from carros c 
inner join vendedores v on c.id_vendedor_responsavel = v.id
where v.data_demissao is null
group by v.id;

select * from carros;

-- Exercício 18)
COPY carros
TO 'C:\Users\user\Desktop\Nova pasta\carros.csv'
    DELIMITER ','
    CSV
    HEADER;
    
COPY cores
TO 'C:\Users\user\Desktop\Nova pasta\cores.csv'
    DELIMITER ','
    CSV
    HEADER;
    
COPY marcas
TO 'C:\Users\user\Desktop\Nova pasta\marcas.csv'
    DELIMITER ','
    CSV
    HEADER;
    
COPY vendedores
TO 'C:\Users\user\Desktop\Nova pasta\vendedores.csv'
    DELIMITER ','
    CSV
    HEADER;
    
-- Exercício 19)
copy (select c.id, c.nome, c2.nome as cor, m.nome as marca, c.valor,
v.nome as vendedor_responsavel, c.ano_modelo, c.ano_versao 
from carros c
inner join marcas m on c.id_marca = m.id
inner join cores c2 on c.id_cor = c2.id
inner join vendedores v on c.id_vendedor_responsavel = v.id)
TO 'C:\Users\user\Desktop\Nova pasta\carros2.csv'
    DELIMITER ';'
    CSV
    HEADER;