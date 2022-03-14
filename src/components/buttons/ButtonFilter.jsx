import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../actions/filter";

const ButtonFilter = ({ title }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);

  const handleActive = () => {
    dispatch(setFilter(title));
  };

  return (
    <button
      className={`button__btn-filter ${
        filter === title && "button__btn-filter-active"
      }`}
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
