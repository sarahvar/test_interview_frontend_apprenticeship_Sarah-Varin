import PropTypes from 'prop-types';

// Task 1: Functional Component
// Create a functional component named `Greeting` that accepts a `name` prop.
// The component renders an `<h1>` element with the text "Hello, [name]!".
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// PropTypes validation for the `name` prop
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;



