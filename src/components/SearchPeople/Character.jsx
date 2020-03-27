import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton/CustomButton';

import { SearchPeopleButtonsContainer } from './SearchPeople.styles';

const Character = ({ character, viewWidth }) => {
  if (viewWidth <= 600)
    return (
      <tr>
        <td>{character.name}</td>
        <td>{character.gender}</td>
        <td>
          <SearchPeopleButtonsContainer>
            <CustomButton type="button" variant="default" size="small" collapse onClick={() => {}}>
              Details
            </CustomButton>
            <CustomButton type="button" variant="save" size="small" onClick={() => {}}>
              Save
            </CustomButton>
          </SearchPeopleButtonsContainer>
        </td>
      </tr>
    );
  return (
    <tr>
      <td>{character.name}</td>
      <td>{character.gender}</td>
      <td>{character.birthYear}</td>
      <td>{character.eyeColor}</td>
      <td>
        <SearchPeopleButtonsContainer>
          <CustomButton type="button" variant="default" size="small" onClick={() => {}}>
            Details
          </CustomButton>
          <CustomButton type="button" variant="save" size="small" onClick={() => {}}>
            Save
          </CustomButton>
        </SearchPeopleButtonsContainer>
      </td>
    </tr>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.number,
    mass: PropTypes.number,
    hairColor: PropTypes.string,
    skinColor: PropTypes.string,
    eyeColor: PropTypes.string,
    birthYear: PropTypes.number,
    gender: PropTypes.string,
  }).isRequired,
  viewWidth: PropTypes.number.isRequired,
};

export default Character;
