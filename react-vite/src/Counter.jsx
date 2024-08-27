// src/Counter.jsx
import { useState } from 'react';

// Task 2: Création du composant Counter pour la gestion de l'état du compteur
const Counter = () => {
  // État pour le compteur
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Fonction pour décrémenter le compteur
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Styles en ligne
  const buttonStyle = {
    borderRadius: '8px',
    border: '1px solid transparent',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: '500',
    fontFamily: 'inherit',
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
    transition: 'background-color 0.25s, border-color 0.25s',
    marginRight: '10px', // Espace entre les boutons
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={decrement} style={{ ...buttonStyle, marginRight: '0' }}>Decrement</button>
    </div>
  );
};

export default Counter;
