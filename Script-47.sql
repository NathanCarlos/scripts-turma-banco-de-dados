-- Exerc�cio 1)

select marca, count(*) from carros
group by marca;

-- Exerc�cio 2)

select vendedor_responsavel, count(*) from carros
group by vendedor_responsavel;

select vendedor_responsavel, marca, sum(valor) as valor_total,
count(*) as qtd, min(valor) as menor_valor, max(valor) as maior_valor, avg(valor) as media 
from carros
group by vendedor_responsavel, marca
order by vendedor_responsavel;

select * from carros;

-- Exerc�cio 3)

select count(*) from carros where kilometragem > 10000;


-- Exerc�cio 4)

select marca, count(*) from carros
where kilometragem < 10000
group by marca
order by marca;

-- Exerc�cio 5)

select marca, avg(valor) from carros
group by marca;

-- Exerc�cio 6)

select marca, avg(valor) from carros
where kilometragem < 10000
group by marca;

-- Exerc�cio 7)

select marca, max(valor) from carros
group by marca;

-- Exerc�cio 8)

select marca, max(valor) from carros
where kilometragem < 10000
group by marca;

-- Exerc�cio 9)

select marca, min(valor) from carros
group by marca;

-- Exerc�cio 10)

select marca, min(valor) from carros
where kilometragem > 10000
group by marca;


-- Exerc�cio 11)

select vendedor_responsavel, max(valor) from carros
group by vendedor_responsavel;

-- Exerc�cio 12)

select vendedor_responsavel, min(valor) from carros
group by vendedor_responsavel;

-- Desafio Exerc�cio 1)

select marca, count(*) as qtd from carros
group by marca
having count(*) > 4;

-- Desafio Exerc�cio 2)

select marca, avg(valor) from carros
group by marca
having avg(valor) > 50000;
