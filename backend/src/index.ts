import http, { IncomingMessage, ServerResponse } from 'http';import db from "./db";
const port = 2000;

const server = http.createServer((req : IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    if (req.url === '/api/categories') {
      db.all('SELECT * FROM category', [], (err : any, rows:any) => {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(rows));
      });
    } else if (req.url === '/api/sub-categories') {
      db.all('SELECT * FROM sub_category', [], (err : any, rows:any) => {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(rows));
      });
    } else if (req.url === '/api/dua') {
      db.all('SELECT * FROM dua', [], (err:any, rows : any) => {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(rows));
      });
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Not Found' }));
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});


server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

