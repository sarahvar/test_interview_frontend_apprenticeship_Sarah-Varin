import React from 'react';
import PropTypes from 'prop-types';

// Task 1: Création du composant fonctionnel Greeting
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Validation des props pour le composant Greeting
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default Greeting;


