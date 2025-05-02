import React, { useState } from "react";
import { InputContainer } from "./style-input";

const Input = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [reponame, setReponame] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/${username}/${reponame}`);
      const data = await response.json();
      
      if (response.status === 404) {
        setError('Repositório não encontrado!');
        onSearch(null);
        return;
      }

      setError('');
      onSearch(data);
    } catch (err) {
      setError('Erro ao buscar repositório!');
      onSearch(null);
    }
  };

  return (
    <InputContainer>
      <input 
        placeholder="Nome do usuário" 
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input 
        placeholder="Nome do repositório" 
        value={reponame}
        onChange={e => setReponame(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <span className="error">{error}</span>}
    </InputContainer>
  );
};

export default Input; 