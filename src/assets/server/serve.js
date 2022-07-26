const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/todos').get((request, response) => {
  response.send(TODOS);
});

app.route('/api/todos').post((request, response) => {
  let todo = request.body;

  const firstId = TODOS ? Math.max.apply(null, TODOS.map(todoIterator => todoIterator.id)) + 1 : 1;
  todo.id = firstId;
  TODOS.push(todo);
  

  response.status(201).send(todo);
});

app.route('/api/todos/:id').put((request, response) => {
  const todoId = +request.params['id'];
  const todo = request.body;

  const index = TODOS.findIndex(todoIterator => todoIterator.id === todoId);
  TODOS[index] = todo;

  response.status(200).send(todo);
});

app.route('/api/todos/:id').get((request, response) => {
  const todoId = +request.params['id'];

  response.status(200).send(TODOS.find(todoIterator => todoIterator.id === todoId));
});

app.route('/api/todos/:id').delete((request, response)=> {
  const todoId = +request.params['id'];
  TODOS = TODOS.filter(todoIterator => todoIterator.id !== todoId);
  
  response.status(204).send({});
});

var TODOS = [
    {
        id: 1,
        name: 'TO-DO Java',
        imageUrl: '/assets/images/java.png',
        stars: 4
    },
    {
        id: 2,
        name: 'TO-DO Angular',
        imageUrl: '/assets/images/angular.png',
        stars: 3
    },
    {
        id: 3,
        name: 'TO-DO Html',
        imageUrl: './assets/images/html.png',
        stars: 3.5
    }
];