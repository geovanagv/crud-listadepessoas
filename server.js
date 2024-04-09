const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Pessoa = require('./pessoa');

app.use(bodyParser.json());

let pessoas = [];

app.get('/pessoas', (req, res) => {
  res.json(pessoas);
});

app.get('/pessoas/:id', (req, res) => {
  const { id } = req.params;
  const pessoa = pessoas.find(p => p.id === id);
  if (!pessoa) {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
  }
  res.json(pessoa);
});

app.post('/pessoas', (req, res) => {
  const { nome, idade, email, telefone } = req.body;
  const pessoa = new Pessoa(nome, idade, email, telefone);
  pessoas.push(pessoa);
  res.status(201).json(pessoa);
});

app.put('/pessoas/:id', (req, res) => {
  const { id } = req.params;
  const { nome, idade, email, telefone } = req.body;
  const index = pessoas.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
  }
  const pessoa = { id, nome, idade, email, telefone };
  pessoas[index] = pessoa;
  res.json(pessoa);
});

app.delete('/pessoas/:id', (req, res) => {
  const { id } = req.params;
  pessoas = pessoas.filter(p => p.id !== id);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
