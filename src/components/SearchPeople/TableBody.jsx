import React from 'react';
import PropTypes, { shape } from 'prop-types';

import Character from './Character';

const TableBody = ({ filteredSearchArray, deviceType, searchArray }) => {
  return filteredSearchArray.length ? (
    filteredSearchArray.map(character => (
      <Character character={character} deviceType={deviceType} key={character.name} />
    ))
  ) : (
    <tr>
      <td colSpan={deviceType === 'phone' || deviceType === 'phone-xs' ? 3 : 5}>
        {!searchArray.length
          ? 'No results for this search input'
          : 'All characters in this page are already saved'}
      </td>
    </tr>
  );
};

TableBody.propTypes = {
  filteredSearchArray: PropTypes.arrayOf(
    shape({
      name: PropTypes.string,
      height: PropTypes.string,
      mass: PropTypes.string,
      hairColor: PropTypes.string,
      skinColor: PropTypes.string,
      eyeColor: PropTypes.string,
      birthYear: PropTypes.string,
      gender: PropTypes.string,
    })
  ).isRequired,
  deviceType: PropTypes.string.isRequired,
  searchArray: PropTypes.arrayOf(
    shape({
      name: PropTypes.string,
      height: PropTypes.string,
      mass: PropTypes.string,
      hairColor: PropTypes.string,
      skinColor: PropTypes.string,
      eyeColor: PropTypes.string,
      birthYear: PropTypes.string,
      gender: PropTypes.string,
    })
  ).isRequired,
};

export default TableBody;
