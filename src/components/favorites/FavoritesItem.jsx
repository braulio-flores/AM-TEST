import React from "react";
import FavoritesDeleteItem from "./FavoritesDeleteItem";

const FavoritesItem = () => {
  return (
    <>
      <div className="favorites__item">
        <div className="favorites__item-image">
          <div className="favorites__item-image-container">
            <img
              src="http://hp-api.herokuapp.com/images/harry.jpg"
              alt="Imagen de la Monalisa"
            />
          </div>
        </div>
        <div className="favorites__item-name">Luna Lovegood</div>
        <div className="favorites__item-trash">
          <FavoritesDeleteItem />
        </div>
      </div>
      <hr className="favorite__item-hr"/>
    </>
  );
};

export default FavoritesItem;
