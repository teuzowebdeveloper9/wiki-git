import React from 'react';
import { ItemContainer } from './styles';

const ItemRepo = ({ repo }) => {
  if (!repo) return null;

  return (
    <ItemContainer>
      <h3>{repo.owner.login}</h3>
      <p>{repo.name}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Ver Repositório
      </a>
    </ItemContainer>
  );
};

export default ItemRepo;
