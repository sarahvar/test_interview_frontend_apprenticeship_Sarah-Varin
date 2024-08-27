import React from 'react';

// Liste des noms
const names = ['Alice', 'Bob', 'Charlie', 'David'];

const NameList = ({ onNameClick }) => {
  return (
    <ul>
      {names.map((name, index) => (
        // Task 3: Rendu de la liste des noms et gestion du clic sur chaque nom
        <li key={index} onClick={() => onNameClick(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default NameList;
;
