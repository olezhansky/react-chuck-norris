import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from './containers/Main/Main';
import Favorite from './containers/Favorite/Favorite';
import { favoritesFromLocalStorageAction } from './store/favorites/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const favoritesFromLocalStorage = localStorage.getItem('favorites');
    if (favoritesFromLocalStorage) {
      dispatch(favoritesFromLocalStorageAction(favoritesFromLocalStorage));
    }
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Main />
      <Favorite />
    </div>
  );
}

export default App;
