import { useRef } from "react";
import PropTypes from 'prop-types';
import css from "./Filter.module.css"

export const Filter = ({ state, setState }) => {
  const filterInput = useRef(null);

  const handleChange = () => {
    setState((prevState) => ({
      ...prevState,
      filter: filterInput.current.value.toLowerCase(),
    }));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter">Find contact by name</label>
      <input
        type="text"
        onChange={handleChange}
        ref={filterInput}
        name="filter"
      />
    </div>
  );
};
Filter.propTypes = {
  state: PropTypes.shape({
    filter: PropTypes.string.isRequired,
  }).isRequired,
  setState: PropTypes.func.isRequired,
};