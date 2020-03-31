import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { saveCharacter, selectCharacter } from '../../redux/actions/dataActions';

import CustomButton from '../CustomButton/CustomButton';

import { SearchPeopleButtonsContainer } from './SearchPeople.styles';

const Character = ({ character, viewWidth }) => {
  const dispatch = useDispatch();

  const handleSaveCharacter = useCallback(() => {
    dispatch(saveCharacter(character));
  }, [dispatch, saveCharacter, character]);

  const handleSelectCharacter = useCallback(() => {
    dispatch(selectCharacter(character));
  }, [dispatch, selectCharacter, character]);

  return viewWidth <= 600 ? (
    <tr>
      <td>{character.name}</td>
      <td>{character.gender}</td>
      <td>
        <SearchPeopleButtonsContainer>
          <CustomButton
            type="button"
            variant="default"
            size="small"
            onClick={handleSelectCharacter}
          >
            Details
          </CustomButton>
          <CustomButton type="button" variant="save" size="small" onClick={handleSaveCharacter}>
            Save
          </CustomButton>
        </SearchPeopleButtonsContainer>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{character.name}</td>
      <td>{character.gender}</td>
      <td>{character.birthYear}</td>
      <td>{character.eyeColor}</td>
      <td>
        <SearchPeopleButtonsContainer>
          <CustomButton
            type="button"
            variant="default"
            size="small"
            onClick={handleSelectCharacter}
          >
            Details
          </CustomButton>
          <CustomButton type="button" variant="save" size="small" onClick={handleSaveCharacter}>
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
    height: PropTypes.string,
    mass: PropTypes.string,
    hairColor: PropTypes.string,
    skinColor: PropTypes.string,
    eyeColor: PropTypes.string,
    birthYear: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
  viewWidth: PropTypes.number.isRequired,
};

export default Character;
