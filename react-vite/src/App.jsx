import { useState, useEffect } from 'react';
import Greeting from './Greeting';
import NameList from './NameList';
import Counter from './Counter';

// Liste des noms
const names = ['Alice', 'Bob', 'Charlie', 'David'];

const App = () => {
  // Fonction pour obtenir un prénom aléatoire
  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  // État pour le nom sélectionné
  const [selectedName, setSelectedName] = useState('');

  // Met à jour le nom sélectionné avec un prénom aléatoire lors du premier rendu
  useEffect(() => {
    setSelectedName(getRandomName());
  }, []);

  // Fonction de rappel pour mettre à jour le nom sélectionné
  const handleNameClick = (name) => {
    setSelectedName(name);
  };

  return (
    <div>
      {/* Task 1: Passer le nom sélectionné comme prop au composant Greeting */}
      <Greeting name={selectedName} />
      {/* Task 3: Passer la fonction de rappel à NameList */}
      <NameList onNameClick={handleNameClick} />
      {/* Task 2: Ajouter le composant Counter */}
      <Counter />
    </div>
  );
};

export default App;
