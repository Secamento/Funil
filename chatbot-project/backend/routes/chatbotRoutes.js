const express = require('express');
const router = express.Router();

// Função simples para gerar uma resposta do bot
const getBotResponse = (message) => {
  // Aqui você pode implementar lógica mais complexa para gerar respostas
  if (message.toLowerCase().includes('oi')) {
    return 'Olá! Como posso ajudar você hoje?';
  }
  if (message.toLowerCase().includes('ajuda')) {
    return 'Claro! Sobre o que você precisa de ajuda?';
  }
  return 'Desculpe, não entendi. Pode reformular a pergunta?';
};

// Rota para lidar com mensagens do chatbot
router.post('/sendMessage', (req, res) => {
  const { message } = req.body; // Captura a mensagem do usuário
  const botReply = getBotResponse(message); // Obtém a resposta do bot
  res.json({ reply: botReply }); // Envia a resposta de volta como JSON
});

module.exports = router; // Exporta o roteador para uso no app.js
