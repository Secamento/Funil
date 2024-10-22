const express = require('express');
const bodyParser = require('body-parser');
const chatbotRoutes = require('./routes/chatbotRoutes'); // Importa as rotas do chatbot

const app = express();
const PORT = process.env.PORT || 5000; // Define a porta

// Middleware
app.use(bodyParser.json()); // Permite que o servidor entenda JSON no corpo das requisições

// Usa as rotas do chatbot
app.use('/api', chatbotRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
