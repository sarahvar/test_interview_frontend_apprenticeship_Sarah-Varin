import { useState, useEffect } from 'react';
import Greeting from './Greeting';
import NameList from './NameList';
import Counter from './Counter';
import { names } from './Names';

// The `App` component integrates `Greeting`, `NameList`, and `Counter` components.
// It manages the state for the selected name and provides a function to update the name when an item in the list is clicked.
const App = () => {
  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
    setSelectedName(getRandomName());
  }, []);

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
