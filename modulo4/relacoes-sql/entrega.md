### Exercício 1

a) A chave estrangeira serve para relacionar tabelas referenciando através de uma PK.
b)
insert into Rating( id, comment, rate, movie_id)
values(
"001",
"Deixa a desejar",
3,
"004");

insert into Rating(id,comment,rate,movie_id)
values(
"002",
"Filme para maiores de 18 anos",
6,
"003");
insert into Rating(id, comment, rate, movie_id)
values(
"003",
"Grande perda de tempo",
1,
"002");
insert into Rating (id, comment, rate, movie_id)
values(
"004",
"Um dos melhores de sua geração",
9,
"001");

select \* from Rating
c)16:01:11 insert into Rating( id, comment, rate, movie_id) values( "001", "Deixa a desejar", 3, "005") Error Code: 1062. Duplicate entry '001' for key 'PRIMARY' 0.141 sec
O mySql não permite a criação por não ter nenhum dado relacionado na outra tabela.
d) ALTER TABLE Movie DROP COLUMN rating;

e)16:10:27 delete from Films where id="002" Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-ayrton-medrano`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Films` (`id`)) 0.141 sec

O banco não permite a exclusão devido estar referenciado em outra tabela.

```
SELECT * FROM Table;
```

### Exercício 2

a) É uma tabela intermediária, ela não contem nada alem de chaves estrangeiras.
b)
c)
d)

### Exercício 3

a)
b)
