import React, { useEffect } from "react";
import Main from "./containers/Main/Main";
import Favorite from "./containers/Favorite/Favorite";
import { useDispatch } from "react-redux";
import { favoritesFromLocalStorageAction } from "./store/favorites/actions";
import FavoriteButton from "./components/UI/FavoriteButton/FavoriteButton";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const favoritesFromLocalStorage = localStorage.getItem('favorites')
    if (favoritesFromLocalStorage) {
      dispatch(favoritesFromLocalStorageAction(favoritesFromLocalStorage))
    }
  }, [dispatch])

  return (
    <div className="wrapper">
        <Main />
        <Favorite />
       
    </div>
  );
}

export default App;
