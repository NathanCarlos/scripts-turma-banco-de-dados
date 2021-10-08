create database sistemaescola;

alter database sistemaescola rename to sistema_escola;

drop database sistema_escola;

alter schema rh rename to recursos_humanos;

drop schema financeiro CASCADE;

create table alunos(
	id serial primary key,
	nome varchar(255)
);

select * from alunos;

alter table alunos
add column data_criacao date not null default current_date,
add column ativo bool default true;

alter table alunos
alter column mensalidade type decimal USING mensalidade::numeric;

alter table alunos
rename password to senha;

alter table alunos
drop column data_criacao;



insert into alunos values
(default, 'Nathan', 450),
(default, 'Gabriel', 350),
(default, 'Felipe', 250),
(default, 'Arthur', 420),
(default, 'Thiago', 450);

create schema cursos;

create table cursos.alunos(
	id serial primary key,
	nome varchar(255)
);

create table cursos.turmas(
	id serial primary key,
	nome varchar(255),
	data_criacao date default current_date
);

select * from cursos.turmas;

insert into cursos.turmas values
(default, '#693 Pi Web Full Stack');

create table financeiro.pagamentos(
	id serial primary key,
	descricao varchar(255),
	valor decimal
);

select * from alunos;

select id, nome ,mensalidade, 
extract('month' from data_criacao) as month,
extract('year' from data_criacao) as year, data_criacao from alunos;

select extract('month' from data_criacao) as month, count(*) from alunos
group by month;