import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setFilter } from '../../redux/actions/dataActions';

import CustomButton from '../CustomButton/CustomButton';

const FilterBox = ({ filterArray }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('All');

  useEffect(() => {
    dispatch(setFilter(selected));
  }, [selected, dispatch, setFilter]);

  const handleClick = event => {
    const { name } = event.target;
    setSelected(name);
  };

  const genderFiltersMarkUp =
    filterArray.length > 1 &&
    filterArray.map(gender => (
      <CustomButton
        key={gender}
        name={gender}
        collapse
        selected={selected === gender}
        size="big"
        onClick={handleClick}
      >
        {gender}
      </CustomButton>
    ));

  return genderFiltersMarkUp.length ? (
    <>
      <CustomButton
        name="All"
        collapse
        selected={selected === 'All'}
        size="big"
        onClick={handleClick}
      >
        All
      </CustomButton>
      {genderFiltersMarkUp}
    </>
  ) : null;
};

FilterBox.defaultProps = {
  filterArray: [],
};

FilterBox.propTypes = {
  filterArray: PropTypes.arrayOf(PropTypes.string),
};

export default FilterBox;
