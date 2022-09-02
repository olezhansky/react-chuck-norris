/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getCategories from '../../api/getCategories';
import Category from './Category';
import './Categories.scss';

const Categories = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);
  const [categoryIsSelected, setcategoryIsSelected] = useState(null);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories.data);
    });
  }, []);

  const handleCategorySelect = (category) => {
    setcategoryIsSelected(category);
  };

  return (
    <ul className="CategoriesList">
      {categories.map((category, index) => (
        <Category
          onSelect={onSelect}
          key={index}
          category={category}
          categorySelect={handleCategorySelect}
          categoryClassList={
            categoryIsSelected === category ? 'category active' : 'category'
          }
        />
      ))}
    </ul>
  );
};

Categories.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Categories;
