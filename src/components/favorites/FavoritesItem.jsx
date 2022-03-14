import React from "react";
import FavoritesDeleteItem from "./FavoritesDeleteItem";

const FavoritesItem = ({ favorite }) => {
  const { name, image } = favorite;

  return (
    <>
      <div className="favorites__item">
        <div className="favorites__item-image">
          <div className="favorites__item-image-container">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="favorites__item-name">{name}</div>
        <div className="favorites__item-trash">
          <FavoritesDeleteItem favorite={favorite} />
        </div>
      </div>
      <hr className="favorite__item-hr" />
    </>
  );
};

export default FavoritesItem;
