import React from 'react';
import ChatWindow from '../components/ChatWindow'; // Importa o componente ChatWindow

const HomePage = () => {
  return (
    <div>
      <h1>Chatbot</h1> {/* Título da página */}
      <ChatWindow /> {/* Renderiza o componente ChatWindow */}
    </div>
  );
};

export default HomePage;
