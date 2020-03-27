import React from 'react';
import PropTypes from 'prop-types';

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
  const { name } = character;

  const imageUrl = name && getCharImage(name, '240');

  return (
    <CardContainer>
      <CardImage alt="character" src={imageUrl} />
      <CardDetailsContainer>
        <CardDetailsTitle>
          {name}
          <CardDetailsButtonsContainer>
            <CustomButton type="button" variant="default" size="small" onClick={() => {}}>
              Details
            </CustomButton>
            <CustomButton type="button" variant="remove" size="small" onClick={() => {}}>
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
    height: PropTypes.number,
    mass: PropTypes.number,
    hairColor: PropTypes.string,
    skinColor: PropTypes.string,
    eyeColor: PropTypes.string,
    birthYear: PropTypes.number,
    gender: PropTypes.string,
  }).isRequired,
};

export default Card;
