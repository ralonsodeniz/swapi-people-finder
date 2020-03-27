import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton/CustomButton';

const FilterBox = ({ genderArray }) => {
  const [selected, setSelected] = useState('');

  const handleClick = event => {
    const { name } = event.target;
    setSelected(name);
  };

  const genderFiltersMarkUp = genderArray.map((gender, genderIndex) => (
    <CustomButton
      key={genderIndex}
      name={gender}
      collapse
      selected={selected === gender}
      size="big"
      onClick={handleClick}
    >
      {gender}
    </CustomButton>
  ));

  return (
    genderFiltersMarkUp.length && (
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
    )
  );
};

FilterBox.defaultProps = {
  genderArray: [],
};

FilterBox.propTypes = {
  genderArray: PropTypes.arrayOf(PropTypes.string),
};

export default FilterBox;
