import React, { useState } from 'react';
import './Chat.css';  // Importa o CSS para estilização

const ChatWindow = () => {
  const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens
  const [input, setInput] = useState(''); // Estado para armazenar o valor do campo de entrada

  // Função para enviar mensagem
  const sendMessage = async (message) => {
    const response = await fetch('/api/sendMessage', { // Chama a API do backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }), // Envia a mensagem como JSON
    });

    const data = await response.json(); // Obtém a resposta do servidor
    setMessages([...messages, { text: message, user: 'user' }, { text: data.reply, user: 'bot' }]); // Atualiza o estado com as novas mensagens
  };

  // Função para lidar com o envio do formulário
  const handleSend = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    if (input.trim()) { // Verifica se o campo não está vazio
      sendMessage(input); // Envia a mensagem
      setInput(''); // Limpa o campo de entrada
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => ( // Mapeia as mensagens para exibi-las
          <div key={index} className={msg.user === 'user' ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Atualiza o estado do input conforme o usuário digita
          placeholder="Digite sua mensagem..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatWindow;
