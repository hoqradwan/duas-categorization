import http, { IncomingMessage, ServerResponse } from 'http';
import db from './db';

const port = 2000;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    if (req.url === '/api/categories') {
      db.all('SELECT * FROM category', [], (err: any, rows: any) => {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(rows));
      });
    } 
  

    else if (req.url === '/api/sub-categories') {
      db.all('SELECT * FROM sub_category', [], (err: any, rows: any) => {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(rows));
      });
    }

    else if (req.url === '/api/duas') {
      db.all('SELECT * FROM dua', [], (err: any, rows: any) => {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(rows));
      });
    }

    else if (req.url?.startsWith('/api/sub-categories/')) {
      const cat_id = req.url.split('/')[3]; 
      const query = 'SELECT * FROM sub_category WHERE cat_id = ?';
      db.all(query, [cat_id], (err: any, rows: any) => {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(rows)); 
      });
    }

    else if (req.url?.startsWith('/api/duas/')) {
      const subcat_id = req.url.split('/')[3]; 
      const query = 'SELECT * FROM dua WHERE subcat_id = ?';
      
      db.all(query, [subcat_id], (err: any, rows: any) => {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(rows)); 
      });
    }

    else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Not Found' }));
    }
  } 

  // Method Not Allowed for non-GET requests
  else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
