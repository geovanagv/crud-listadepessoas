const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3003;

// Middleware para o Express aceitar JSON
app.use(express.json());

// Array para armazenar as pessoas
let pessoas = [];

// Função para gerar um ID único
const generateId = () => {
  return uuidv4();
};

// Rota para recuperar todas as pessoa
app.get('/pessoas', (req, res) => {
  res.json(pessoas);
});

// Rota para recuperar uma pessoa específica por meio de seu identificador
app.get('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  const pessoa = pessoas.find(p => p.id === id);

  if (!pessoa) {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
  }

  res.json(pessoa);
});

// Rota para adicionar uma nova pessoa
app.post('/pessoas', (req, res) => {
  const pessoa = { ...req.body, id: generateId() };
  pessoas.push(pessoa);
  res.status(201).json(pessoa);
});

// Rota para atualizar uma pessoa existente com base em seu identificador
app.put('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  const index = pessoas.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
  }

  pessoas[index] = { ...req.body, id };
  res.json(pessoas[index]);
});

// Rota para remover uma pessoa da lista com base em seu identificador
app.delete('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  pessoas = pessoas.filter(p => p.id !== id);
  res.sendStatus(204);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:${PORT}');
});