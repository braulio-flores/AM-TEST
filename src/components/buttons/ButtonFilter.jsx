import PropTypes from "prop-types";

const ButtonFilter = ({ title }) => {

  const handleActive = ( e ) => {
    //   e.active();
  };

  return (
    <button
      className="button__btn-filter"
      onClick={handleActive}
    >
      {title}
    </button>
  );
};

ButtonFilter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonFilter;
