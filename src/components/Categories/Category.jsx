import React from 'react';
import PropTypes from 'prop-types';
import './Categories.scss';

const Category = ({
  onSelect,
  category,
  categorySelect,
  categoryClassList,
}) => (
  <li
    role="presentation"
    className={categoryClassList}
    onClick={() => {
      categorySelect(category);
      onSelect(category);
    }}
  >
    {category}
  </li>
);

Category.propTypes = {
  onSelect: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  categorySelect: PropTypes.func.isRequired,
  categoryClassList: PropTypes.string.isRequired,
};

export default Category;
