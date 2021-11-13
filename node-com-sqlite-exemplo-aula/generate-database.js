const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lets_code_class.sqlite', (result) => {
    console.log(result);
});

db.serialize(function() {
  db.run(`CREATE TABLE alunos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      mensalidade REAL
  )`);
});

db.close();