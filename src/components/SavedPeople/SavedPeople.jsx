import React, { useState } from 'react';

import Card from '../Card/Card';

import {
  SavedPeopleContainer,
  SavedPeopleScroll,
  SavedPeopleTitle,
  SavedPeopleFiltersContainer,
  SavedPeopleEmptyText,
} from './SavedPeople.styles';
import CustomButton from '../CustomButton/CustomButton';

const SavedPeople = () => {
  const [selected, setSelected] = useState('');
  const savedPeople = [];

  const CardsMarkUp = savedPeople.length ? (
    savedPeople.map((item, itemIndex) => {
      const { name, imageUrl } = savedPeople;
      return (
        <Card
          key={itemIndex}
          imageUrl={imageUrl}
          name={name}
          handleRemove={() => {}}
          handleShowDetails={() => {}}
        />
      );
    })
  ) : (
    <SavedPeopleEmptyText>You did not save any people yet!</SavedPeopleEmptyText>
  );

  const handleClick = event => {
    const { name } = event.target;
    setSelected(name);
  };

  return (
    <SavedPeopleContainer>
      <SavedPeopleTitle>Saved people</SavedPeopleTitle>
      <SavedPeopleFiltersContainer>
        <CustomButton
          name="all"
          collapse
          selected={selected === 'all'}
          size="big"
          onClick={handleClick}
        >
          All
        </CustomButton>
        <CustomButton
          name="male"
          collapse
          selected={selected === 'male'}
          size="big"
          onClick={handleClick}
        >
          Male
        </CustomButton>
        <CustomButton
          name="female"
          collapse
          selected={selected === 'female'}
          size="big"
          onClick={handleClick}
        >
          Female
        </CustomButton>
      </SavedPeopleFiltersContainer>
      <SavedPeopleScroll>{CardsMarkUp}</SavedPeopleScroll>
    </SavedPeopleContainer>
  );
};

export default SavedPeople;
