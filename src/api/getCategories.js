/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

const getCategories = () =>
  axios.get('https://api.chucknorris.io/jokes/categories');

export default getCategories;
