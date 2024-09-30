const express = require('express');
const app = express();
const port = 3000;

// Route: GET /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// Route: GET /user
app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'Kalp';
  const lastname = req.query.lastname || 'Senghani';
  res.json({ firstname, lastname });
});

// Route: POST /user/:firstname/:lastname
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
