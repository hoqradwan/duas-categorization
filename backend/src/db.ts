import sqlite3 from 'sqlite3';

// Open SQLite database
const db = new sqlite3.Database('./db/dua_main.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

export default db;
