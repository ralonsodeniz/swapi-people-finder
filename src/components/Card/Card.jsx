import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton/CustomButton';

import {
  CardContainer,
  CardDetailsContainer,
  CardImage,
  CardDetailsTitle,
  CardDetailsButtonsContainer,
} from './Card.styles';

const Card = ({ name, imageUrl, handleShowDetails, handleRemove }) => {
  return (
    <CardContainer>
      <CardImage alt="user" src={imageUrl} />
      <CardDetailsContainer>
        <CardDetailsTitle>
          {name}
          <CardDetailsButtonsContainer>
            <CustomButton type="button" variant="default" size="small" onClick={handleShowDetails}>
              Details
            </CustomButton>
            <CustomButton type="button" variant="remove" size="small" onClick={handleRemove}>
              Remove
            </CustomButton>
          </CardDetailsButtonsContainer>
        </CardDetailsTitle>
      </CardDetailsContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  handleShowDetails: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Card;
