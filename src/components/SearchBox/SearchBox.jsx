import React from 'react';
import PropTypes from 'prop-types';

import { SearchBoxContainer, SearchBoxInput, SearchBoxLabel } from './SearchBox.styles';

const SearchBox = ({ onSearchChange, label, value, id, name, disabled }) => {
  return (
    <SearchBoxContainer>
      <SearchBoxInput
        onChange={onSearchChange}
        value={value}
        type="search"
        id={id}
        name={name}
        disabled={disabled}
      />
      {label && <SearchBoxLabel shrink={value.length}>{label}</SearchBoxLabel>}
    </SearchBoxContainer>
  );
};

SearchBox.defaultProps = {
  label: '',
  id: '',
  disabled: false,
};

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default SearchBox;
