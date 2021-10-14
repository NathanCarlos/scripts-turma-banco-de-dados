begin;
	delete from carros where id = 24;
	insert into carros values
	(default, 10, 1, 1, 'Novo Onix Plus', 85000, false, 0, 2021, 2022, default, default);
end;

commit;
rollback;

select * from carros;

insert into carros values
	(default, 1, 1, 1, 'Novo Onix Plus', 85000, false, 0, 2021, 2022, default, default);

delete from carros where id = 27;
