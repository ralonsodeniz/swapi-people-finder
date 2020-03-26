import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';

import {
  SavedPeopleContainer,
  SavedPeopleSpinnerContainer,
  SavedPeopleScroll,
  SavedPeopleTitle,
  SavedPeopleFiltersContainer,
} from './SavedPeople.styles';
import CustomButton from '../CustomButton/CustomButton';

const SavedPeople = ({ items, loading }) => {
  const CardsMarkUp = items.map((item, itemIndex) => {
    const { name, imageUrl } = item;
    return (
      <Card
        key={itemIndex}
        imageUrl={imageUrl}
        name={name}
        handleRemove={() => {}}
        handleShowDetails={() => {}}
      />
    );
  });

  return (
    <SavedPeopleContainer>
      {loading && (
        <SavedPeopleSpinnerContainer>
          <Spinner />
        </SavedPeopleSpinnerContainer>
      )}
      <SavedPeopleTitle>Saved people</SavedPeopleTitle>
      <SavedPeopleFiltersContainer>
        <CustomButton collapse size="big">
          All
        </CustomButton>
        <CustomButton collapse size="big">
          Male
        </CustomButton>
        <CustomButton collapse size="big">
          Female
        </CustomButton>
      </SavedPeopleFiltersContainer>
      <SavedPeopleScroll>{CardsMarkUp}</SavedPeopleScroll>
    </SavedPeopleContainer>
  );
};

SavedPeople.defaultProps = {
  loading: false,
};

SavedPeople.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
};

export default SavedPeople;
