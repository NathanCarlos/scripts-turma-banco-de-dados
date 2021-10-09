create database sistema_controle_financeiro;

create schema sistema_controle_financeiro;

create table tipo_lancamentos (
	ID SERIAL primary key,
	NOME varchar(255)
);

create table categoria_lancamentos (
	ID SERIAL primary key,
	NOME varchar(255)
);

create table lancamentos (
	ID SERIAL primary key,
	ID_TIPO_LANCAMENTO INTEGER references tipo_lancamentos(id),
	ID_CATEGORIA_LANCAMENTO INTEGER references categoria_lancamentos(id),
	DESCRICAO varchar(255) not null,
	VALOR decimal not null,
	DATA date default current_date
);

select * from tipo_lancamentos;
select * from categoria_lancamentos;
select * from lancamentos;

insert into tipo_lancamentos values
(default, 'Entrada'),
(default, 'Saída');

insert into categoria_lancamentos values
(default, 'Empréstimos'),
(default, 'Fianciamentos'),
(default, 'Investimentos'),
(default, 'Salário'),
(default, 'Alimentação'),
(default, 'Lazer'),
(default, 'Compras'),
(default, 'Assinaturas e Serviços'),
(default, 'Contas fixas de casa'),
(default, 'Cuidados pessoais'),
(default, 'Impostos e taxas'),
(default, 'Casa'),
(default, 'Mercado'),
(default, 'Outros'),
(default, 'Roupas'),
(default, 'Saúde'),
(default, 'Trabalho'),
(default, 'Transporte');

insert into lancamentos values
(default, 1, 4, 'Salário do mês de janeiro', 5000, '2021-01-25'),
(default, 2, 2, 'Pagamento do financiamento da casa', -2500, '2021-01-25'),
(default, 2, 5, 'Comida para o mês', -1000, '2021-01-28'),
(default, 2, 9, 'Conta de internet, luz e água', -430, '2021-02-03'),
(default, 1, 4, 'Salário do mês de fevereiro', 5000, '2021-02-25'),
(default, 2, 2, 'Pagamento do financiamento da casa', -2500, '2021-02-25'),
(default, 2, 5, 'Comida para o mês', -900, '2021-02-28'),
(default, 2, 9, 'Conta de internet, luz e água', -390, '2021-03-03'),
(default, 2, 7, 'Compras lazer', -390, '2021-03-05'),
(default, 2, 8, 'Netflix, amazon prime', -70, '2021-03-10'),
(default, 2, 3, 'Investimentos itub3, knri11', -1000, '2021-03-15'),
(default, 1, 4, 'Salário do mês de março', 5500, '2021-03-25'),
(default, 2, 2, 'Pagamento do financiamento da casa', -2400, '2021-03-25'),
(default, 2, 5, 'Comida para o mês', -850, '2021-03-28'),
(default, 2, 9, 'Conta de internet, luz e água', -400, '2021-04-05'),
(default, 2, 7, 'Compras lazer', -200, '2021-04-05'),
(default, 2, 8, 'Netflix, amazon prime', -70, '2021-04-10'),
(default, 2, 3, 'Investimentos itub3', -800, '2021-04-13'),
(default, 1, 3, 'Investimentos', 5, '2021-04-20'),
(default, 1, 4, 'Salário do mês de abril', 5500, '2021-04-25'),
(default, 2, 2, 'Pagamento do financiamento da casa', -2400, '2021-04-25'),
(default, 2, 5, 'Comida para o mês', -1000, '2021-04-29'),
(default, 2, 9, 'Conta de internet, luz e água', -330, '2021-05-05'),
(default, 2, 7, 'Compras lazer', -200, '2021-05-05'),
(default, 2, 8, 'Netflix, amazon prime', -70, '2021-05-10'),
(default, 2, 3, 'Investimentos knri11', -600, '2021-05-13'),
(default, 2, 18, 'Ônibus e metrô mês', -200, '2021-05-20'),
(default, 2, 14, 'Pagamento de taxa mei', -50, '2021-05-21');

select * from lancamentos;


-- Crie uma query que traga os lançamentos com as descrições do tipo de lançamentos e categorias dos lançamentos;
select * from lancamentos l 
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id
inner join categoria_lancamentos cl on l.id_categoria_lancamento = cl.id;

-- Crie uma query que traga os lançamentos que são do tipo de 'entradas';
select * from lancamentos l 
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id where tl.id = 1;

-- Crie uma query que traga os lançamentos que são do tipo de 'saídas';
select * from lancamentos l 
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id where tl.id = 2;

-- Crie uma query que traga o total de todas as entradas e saídas;
select tl.id, tl.nome, count(*) as total from lancamentos l 
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id
group by tl.id, tl.nome;

-- Crie uma query que traga a soma de todas as entradas e saídas;
select tl.id, tl.nome, sum(l.valor) as soma from lancamentos l 
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id
group by tl.id, tl.nome;

-- Crie uma query que traga o maior valor de entradas e saídas;
select tl.id, tl.nome, max(l.valor) as maior_valor from lancamentos l 
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id
group by tl.id, tl.nome;

-- Crie uma query que traga o menor valor de entradas e saídas;
select tl.id, tl.nome, min(l.valor) as menor_valor from lancamentos l 
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id
group by tl.id, tl.nome;

-- Crie uma query que traga a média de valor de entradas e saídas;
select tl.id, tl.nome, avg(l.valor) as media_valor from lancamentos l 
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id
group by tl.id, tl.nome;

-- Crie uma query que traga o total de lançamentos por categoria;
select cl.id, cl.nome, count(*) as total_lancamentos from lancamentos l 
inner join categoria_lancamentos cl on l.id_categoria_lancamento = cl.id
group by cl.id, cl.nome;

-- Crie uma query que traga a soma do valor de lançamentos por categoria;
select cl.id, cl.nome, sum(l.valor) as soma_lancamentos from lancamentos l 
inner join categoria_lancamentos cl on l.id_categoria_lancamento = cl.id
group by cl.id, cl.nome order by cl.nome;

-- Crie uma query que traga a soma do valor de lançamentos por categoria e que são entradas ordernando categorias por nome;
select cl.id, cl.nome, sum(l.valor) as soma_lancamentos from lancamentos l
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id
inner join categoria_lancamentos cl on l.id_categoria_lancamento = cl.id
where tl.id = 1
group by cl.id, cl.nome
order by cl.nome;

-- Crie uma query que traga a soma do valor de lançamentos por categoria e que são saídas ordernando categorias por nome;
select cl.id, cl.nome, sum(l.valor) as soma_lancamentos from lancamentos l
inner join tipo_lancamentos tl on l.id_tipo_lancamento = tl.id
inner join categoria_lancamentos cl on l.id_categoria_lancamento = cl.id
where tl.id = 2
group by cl.id, cl.nome
order by cl.nome;

-- Crie uma query que traga a média do valor de lançamentos da categoria de alimentação
select cl.id, cl.nome, avg(l.valor) as soma_lancamentos from lancamentos l
inner join categoria_lancamentos cl on l.id_categoria_lancamento = cl.id
where cl.id = 5
group by cl.id, cl.nome;

-- Crie uma query que traga a média do valor de lançamentos da categoria de investimentos
select cl.id, cl.nome, avg(l.valor) as soma_lancamentos from lancamentos l
inner join categoria_lancamentos cl on l.id_categoria_lancamento = cl.id
where cl.id = 3
group by cl.id, cl.nome;

-- Crie uma query que traga a média do valor de lançamentos da categoria de salários
select cl.id, cl.nome, avg(l.valor) as soma_lancamentos from lancamentos l
inner join categoria_lancamentos cl on l.id_categoria_lancamento = cl.id
where cl.id = 4
group by cl.id, cl.nome;

-- Crie uma query que traga a soma de valores de lançamentos para cada mês em ordem crescente de mês;
select extract('month' from l.data), sum(l.valor) as soma_lancamentos from lancamentos l 
group by extract('month' from l.data) order by extract('month' from l.data);

-- Crie uma query que traga a média de valores de lançamentos para cada mês em ordem decrescente de mês;
select extract('month' from l.data), avg(l.valor) as media_lancamentos from lancamentos l 
group by extract('month' from l.data) order by extract('month' from l.data) desc;

-- Crie uma query que traga o valor total entre entradas/saídas para o ano de 2021;
select extract('year' from l.data) as ano, sum(l.valor) as soma_lancamentos from lancamentos l 
group by ano;
