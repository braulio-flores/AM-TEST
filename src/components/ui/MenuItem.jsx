import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { openFavorites, openModal } from "../../actions/ui";

const MenuItem = ({ option, iteme }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    switch (option) {
      case "AGREGAR":
        dispatch(openModal());
        break;
      case "FAVORITOS":
        dispatch(openFavorites());
        break;
      default:
        break;
    }
  };

  return (
    <button className="menu__item" onClick={handleClick}>
      {option} {iteme}{" "}
    </button>
  );
};

MenuItem.propTypes = {
  option: PropTypes.string.isRequired,
};

export default MenuItem;
