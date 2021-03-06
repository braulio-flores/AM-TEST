import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeFavorites } from "../../actions/ui";
import FavoritesItem from "./FavoritesItem";

const FavoritesMenu = () => {
  let { favorites } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const handleCloseFavorites = () => {
    dispatch(closeFavorites());
  };

  return (
    <>
      <div
        className="favorites__menu-background"
        onClick={handleCloseFavorites}
      ></div>
      <div className="favorites__content">
        {
          favorites.length === 0 &&  <p className="favorites__item favorites__no-item">No tienes Favoritos</p>        
        }
        {favorites.map((favorite, i) => {
          return <FavoritesItem key={`favorite.name${i}`} favorite={favorite} />;
        })}
      </div>
    </>
  );
};

export default FavoritesMenu;
