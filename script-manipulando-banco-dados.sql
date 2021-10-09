insert into lancamentos values 
(default, null, null, 'Salário mês setembro', 5000, default);

select * from lancamentos;

delete from lancamentos
where id = 29;

select * from categoria_lancamentos cl 

delete from lancamentos
where id in (28, 27, 26);

select * from lancamentos l;

truncate lancamentos restart identity;

delete from tipo_lancamentos;

select * from categoria_lancamentos cl 

truncate tipo_lancamentos restart identity cascade;
truncate categoria_lancamentos restart identity cascade;

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

select * from lancamentos l 

update lancamentos set id_categoria_lancamento = 6, id_tipo_lancamento = 1
where id = 15;

COPY (select * from lancamentos l)
TO 'C:\Users\user\Desktop\lancamentos.csv'
    DELIMITER ';'
    CSV
    HEADER;
    
COPY lancamentos
FROM 'C:\Users\user\Desktop\lancamentos.csv' WITH
    DELIMITER ';'
    CSV
    HEADER;