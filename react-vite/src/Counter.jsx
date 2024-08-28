import { useState } from 'react';

// Task 2: State Management
// Create a component named `Counter` that displays a count value.
// Include two buttons: one to increment the count and one to decrement it.
// Use the `useState` hook to manage the count state.

// Tâche 2 : Gestion de l'État
// Créez un composant nommé `Counter` qui affiche une valeur de compteur.
// Incluez deux boutons : un pour incrémenter le compteur et un pour le décrémenter.
// Utilisez le hook `useState` pour gérer l'état du compteur.

const Counter = () => {
  // State for the counter
  // État pour le compteur
  const [count, setCount] = useState(0);

  // Function to increment the counter
  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the counter
  // Fonction pour décrémenter le compteur
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Inline styles for buttons
  // Styles en ligne pour les boutons
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
    marginRight: '10px',
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
