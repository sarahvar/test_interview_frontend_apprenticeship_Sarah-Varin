// src/App.jsx
import { useState, useEffect } from 'react';
import Greeting from './Greeting';
import NameList from './NameList';
import Counter from './Counter';
import { names } from './Names';

// The `App` component integrates `Greeting`, `NameList`, and `Counter` components.
// It manages the state for the selected name and provides a function to update the name when an item in the list is clicked.

// Le composant `App` intègre les composants `Greeting`, `NameList`, et `Counter`.
// Il gère l'état pour le nom sélectionné et fournit une fonction pour mettre à jour le nom lorsque
// un élément de la liste est cliqué.

const App = () => {
  // Function to get a random name from the names array
  // Fonction pour obtenir un prénom aléatoire à partir du tableau de noms
  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  // State to keep track of the selected name
  // État pour suivre le nom sélectionné
  const [selectedName, setSelectedName] = useState('');

  // Effect to set a random name on initial render
  // Effet pour définir un prénom aléatoire lors du premier rendu
  useEffect(() => {
    setSelectedName(getRandomName());
  }, []);

  // Callback function to update the selected name when a name is clicked
  // Fonction de rappel pour mettre à jour le nom sélectionné lorsqu'un nom est cliqué
  const handleNameClick = (name) => {
    setSelectedName(name);
  };

  return (
    <div>
      <Greeting name={selectedName} />
      <NameList names={names} onNameClick={handleNameClick} />
      <Counter />
    </div>
  );
};

export default App;
