var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('lets_code_teste.sqlite', (data) => {
    console.log(data);
});

db.serialize(() => {
  db.run(`
  CREATE TABLE alunos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      mensalidade REAL
      )`);
});

db.close();