create table marcas (
	ID SERIAL primary key,
	NOME varchar(255)
);

create table cores (
	ID SERIAL primary key,
	NOME varchar(255)
);

create table vendedores (
	ID SERIAL primary key,
	NOME varchar(255),
	EMAIL varchar(255) unique,
	SENHA varchar(255),
	DATA_ADMISSAO date
);

create table carros (
	ID SERIAL primary key,
	ID_MARCA integer references marcas(id),
	ID_COR integer references cores(id),
	ID_VENDEDOR_RESPONSAVEL integer references vendedores(id),
	NOME varchar(255) not null,
	VALOR decimal not null,
	SEMI_NOVO boolean default true,
	KILOMETRAGEM integer not null,
	ANO_VERSAO integer,
	ANO_MODELO integer,
	DATA_ENTRADA date default current_date,
	DATA_VENDA date
);


insert into marcas values 
(default, 'Chevrolet'),
(default, 'Volkswagen'),
(default, 'Fiat'),
(default, 'Renault'),
(default, 'Bmw'),
(default, 'Mercedes-Benz');

insert into cores values
(default, 'Preto'),
(default, 'Prata'),
(default, 'Branco'),
(default, 'Vinho'),
(default, 'Azul'),
(default, 'Marrom'),
(default, 'Cinza');

insert into vendedores values 
(default, 'Marcelo', 'marcelo@gmail.com', 'marcelo123', '2021-01-03'),
(default, 'Alberto', 'alberto@gmail.com', 'alberto123', '2021-01-03'),
(default, 'David', 'david@gmail.com', 'david123', '2021-02-05'),
(default, 'Nathan', 'nathan@gmail.com', 'nathan123', '2021-03-03'),
(default, 'Matheus', 'matheus@gmail.com', 'matheus123', '2021-03-05');


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