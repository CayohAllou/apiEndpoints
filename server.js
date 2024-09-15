const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = [
  {
    id: 1,
    name: 'Carmela',
    email: 'mela@gmail.com',
    age: 25,
    salary: 25000,
  },
  {
    id: 2,
    name: 'Joseph',
    email: 'joe@yahoo.com',
    age: 30,
    salary: 45000,
  },
  {
    id: '3',
    name: 'James',
    email: 'james@msn.com',
    age: 35,
    salary: 30000,
  },
  {
    id: 4,
    name: 'John',
    email: 'john@gmail.com',
    age: 40,
    salary: 25000,
  },
  {
    id: 5,
    name: 'Frank',
    email: 'frank@yahoo.com',
    age: 45,
    salary: 45000,
  },
  {
    id: 5,
    name: 'Alex',
    email: 'alex@msn.com',
    age: 21,
    salary: 30000,
  },
];

var routes = [
  {
    'http://localhost:3000//api/users:': 'returns all users',
  },
  {
    'http://localhost:3000//api/users/search/:id:':
      'Fetches a specific user by ID',
  },
  {
    'http://localhost:3000/api/users/:name/:email/:':
      'Retrieves and displays parameters.',
  },
  {
    'http://localhost:3000/api/users/add':
      'Adds a new user through form submission.',
  },

  {
    'http://localhost:3000/api/users/delete/:id:': ' Deletes a user by ID.',
  },
];
app.use(bodyParser.urlencoded({ extended: false }));

//Root Route: Displays available routes.
app.get('/', (req, res) => {
  res.send(routes);
});

//GET /api/users: Returns all users.
app.get('/api/users', (req, res) => {
  res.send(users);
});

//GET /api/users/: Fetches a specific user by ID.
app.get('/api/users/search/:id', (req, res) => {
  const user = users.find((h) => h.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send('The user with the given ID was not found');
  res.send(user);
});

//GET /api/users/: Retrieves and displays parameters.
app.get('/api/users/:name/:email', (req, res) => {
  res.send[(req.params, req.query)];
});

//POST /api/users: Adds a new user through form submission.
app.get('/api/users/add', (req, res) => {
  res.sendFile(__dirname + '/' + 'users.html');
});
var urlencodedparser = bodyParser.urlencoded({ extended: false });
app.post('/api/users/add', urlencodedparser, (req, res) => {
  var user = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    salary: req.body.salary,
  };
  users.push(user);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><h1>User succesfully Added!</h1></body></html>');
  res.end();
});

//DELETE /api/delete/: Deletes a user by ID.
app.delete('/api/users/delete/:id', function (req, res) {
  console.log('req params', req.params.id);
  users = users.filter(({ id }) => id !== req.params.id);
});

app.listen(3000, () =>
  console.log('Server is running on port http://localhost:3000')
);
