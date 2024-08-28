import PropTypes from 'prop-types';

// Task 1: Functional Component
// Create a functional component named `Greeting` that accepts a `name` prop.
// The component renders an `<h1>` element with the text "Hello, [name]!".
// Tâche 1 : Composant Fonctionnel
// Créez un composant fonctionnel nommé `Greeting` qui accepte une prop `name`.
// Le composant rend une balise `<h1>` avec le texte "Hello, [name]!".
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// PropTypes validation for the `name` prop
// Validation des props pour `name`
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
