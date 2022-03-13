import React from 'react'
import PropTypes from "prop-types";

const MenuItem = ({ option, iteme }) => {
  return (
    <button className='menu__item'>{ option } { iteme } </button>
  )
}

MenuItem.propTypes = {
    option: PropTypes.string.isRequired,
};

export default MenuItem