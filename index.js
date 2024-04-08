const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/pessoas', (req, res) => {
    res.json({ message: 'Lista de pessoas' });
  });
  
  app.get('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Detalhes da pessoa ${id}` });
  });

  app.post('/pessoas', (req, res) => {
    res.json({ message: 'Pessoa adicionada com sucesso' });
  });
  
  app.put('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Pessoa ${id} atualizada com sucesso` });
  });
  
  app.delete('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Pessoa ${id} removida com sucesso` });
  });
  