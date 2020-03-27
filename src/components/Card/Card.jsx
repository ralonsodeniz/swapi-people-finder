import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeCharacter, selectCharacter } from '../../redux/actions/dataActions';
import getCharImage from '../../helpers/getCharImage';

import CustomButton from '../CustomButton/CustomButton';

import {
  CardContainer,
  CardDetailsContainer,
  CardImage,
  CardDetailsTitle,
  CardDetailsButtonsContainer,
} from './Card.styles';

const Card = ({ character }) => {
  const dispatch = useDispatch();
  const { name } = character;

  const imageUrl = name && getCharImage(name, '240');

  const handleRemoveCharacter = useCallback(() => {
    dispatch(removeCharacter(character.name));
  }, [dispatch, removeCharacter, character]);

  const handleSelectCharacter = useCallback(() => {
    dispatch(selectCharacter(character));
  }, [dispatch, selectCharacter, character]);

  return (
    <CardContainer>
      <CardImage alt="character" src={imageUrl} />
      <CardDetailsContainer>
        <CardDetailsTitle>
          {name}
          <CardDetailsButtonsContainer>
            <CustomButton
              type="button"
              variant="default"
              size="small"
              onClick={handleSelectCharacter}
            >
              Details
            </CustomButton>
            <CustomButton
              type="button"
              variant="remove"
              size="small"
              onClick={handleRemoveCharacter}
            >
              Remove
            </CustomButton>
          </CardDetailsButtonsContainer>
        </CardDetailsTitle>
      </CardDetailsContainer>
    </CardContainer>
  );
};

Card.propTypes = {
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
};

export default Card;
