-- RELAÇÃO N PARA N ENTRE PRODUTOS E CATEGORIAS
-- PRODUTOS_CATEGORIAS;
create table products(
	id serial primary key,
	description varchar(255),
	price decimal,
	status boolean default true
);

create table categories(
	id serial primary key,
	description varchar(255)
);

-- foreign key(product_id)
create table products_categories(
	product_id integer references products(id) on delete cascade,
	category_id integer references categories(id) on delete cascade
);

delete from products where id = 1;
select * from products_categories pc where category_id = 3;
delete from categories where id = 3;

insert into products_categories values
(1, 3),
(1, 1),
(2, 3),
(2, 1),
(3, 3),
(3, 1);

insert into categories values 
(default, 'Informática'),
(default, 'Impressão'),
(default, 'Video Games'),
(default, 'Fones de Ouvido'),
(default, 'Acessórios');

select * from products;
select * from categories;

insert into products values 
(default, 'Playstation 4', 2800, default),
(default, 'Playstation 3', 1500, default),
(default, 'Playstation 5', 5000, default),
(default, 'Hyperx cloud stinger', 350, default),
(default, 'Hyperx', 450, default);

select * from products p
inner join products_categories pc on pc.product_id = p.id
inner join categories c on pc.category_id = c.id;
