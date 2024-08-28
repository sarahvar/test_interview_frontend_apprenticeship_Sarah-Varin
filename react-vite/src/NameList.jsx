import PropTypes from 'prop-types';

// Task 3: List Rendering
// Given an array of names, render a list of names with each name clickable.
// The component should call the `onNameClick` callback with the name when clicked.
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
NameList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNameClick: PropTypes.func.isRequired,
};

export default NameList;
