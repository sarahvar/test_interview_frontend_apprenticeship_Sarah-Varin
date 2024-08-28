import PropTypes from 'prop-types';

// Task 3: List Rendering
// Given an array of names, render a list of names with each name clickable.
// The component should call the `onNameClick` callback with the name when clicked.

// Tâche 3 : Rendu de Liste
// Étant donné un tableau de noms, rendre une liste de noms avec chaque nom cliquable.
// Le composant doit appeler la fonction de rappel `onNameClick` avec le nom lorsqu'il est cliqué.

const NameList = ({ names, onNameClick }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index} onClick={() => onNameClick(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

// PropTypes validation for the `names` and `onNameClick` props
// Validation des props pour `names` et `onNameClick`
NameList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNameClick: PropTypes.func.isRequired,
};

export default NameList;
