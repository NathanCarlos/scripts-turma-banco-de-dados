select c.id, c.nome, count(*) from alunos al
inner join cursos c on al.id_curso = c.id
group by c.id;

select c.id, c.nome, max(mensalidade) from alunos al
inner join cursos c on al.id_curso = c.id
group by c.id;

select c.id, c.nome, max(mensalidade), sum(mensalidade) from alunos al
inner join cursos c on al.id_curso = c.id
group by c.id;

select t.id, t.nome, avg(mensalidade) from alunos al
inner join turmas t on al.id_turma = t.id
group by t.id;

select t.id, t.nome, avg(mensalidade) from alunos al
left join turmas t on al.id_turma = t.id
group by t.id;

select t.id, t.nome, avg(mensalidade) from alunos al
full join turmas t on al.id_turma = t.id
group by t.id;

select t.id, t.nome, avg(mensalidade) from alunos al
right join turmas t on al.id_turma = t.id
group by t.id;

select * from alunos al 
inner join turmas t on al.id_turma = t.id
inner join cursos c on al.id_curso = c.id;

create table cursos(
	id serial primary key,
	nome varchar(255),
	ativo bool default true
);

INSERT INTO public.cursos
(id, nome, ativo)
VALUES(1, 'PI Web Full Stack', true);
INSERT INTO public.cursos
(id, nome, ativo)
VALUES(2, 'Data Science', true);
INSERT INTO public.cursos
(id, nome, ativo)
VALUES(3, 'Python Pro', true);
INSERT INTO public.cursos
(id, nome, ativo)
VALUES(4, 'PHP Magento', true);

create table turmas(
	id serial primary key,
	nome varchar(255),
	ativo bool default true
);

INSERT INTO public.turmas
(id, nome, ativo)
VALUES(1, '#693', true);
INSERT INTO public.turmas
(id, nome, ativo)
VALUES(2, '#547', true);
INSERT INTO public.turmas
(id, nome, ativo)
VALUES(3, '#745', true);


create table alunos(
	id serial primary key
	id_curso integer references cursos(id),
	id_turma integer references turmas(id),
	nome varchar(255),
	email varchar(255),
	endereco varchar(255),
	mensalidade decimal,
	maior_idade bool default true
);

INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(1, 1, 1, 'Flavio', 'flavio@gmail.com', 'Av Paulista', 450, true);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(2, 1, 1, 'Gabril', 'gabriel@gmail.com', 'Av Paulista', 380, true);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(3, 1, 1, 'Alan', 'alan@gmail.com', 'Av Paulista', 380, true);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(4, 2, 1, 'Augusto', 'augusto2@gmail.com', 'Av Paulista', 360, true);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(5, 2, 2, 'Palloma', 'palloma@hotmail.com', 'Av Paulista', 380, true);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(6, 2, 3, 'Alan', 'alan2@hotmail.com', 'Av Paulista', 370, false);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(7, 2, 3, 'Augusto', 'augusto@gmail.com', 'Rua Serafim', 500, false);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(8, 3, 3, 'Sossa', 'sossa@gmail.com', 'Avenida Guarulhos', 250, true);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(9, 3, 2, 'Thiago', 'thiago@gmail.com', 'Consolacao', 350, true);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(10, 3, 2, 'Felipe', 'felipe@outlook.com', 'Bela vista', 100, false);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(11, 3, 3, 'Nathan', 'nathan@gmail.com', 'Rua Serafim', 380, true);
INSERT INTO public.alunos
(id, id_curso, id_turma, nome, email, endereco, mensalidade, maior_idade)
VALUES(12, NULL, NULL, 'Flavio Augusto', 'flavioaugusto@gmail.com', 'Av Paulista', 450, true);


