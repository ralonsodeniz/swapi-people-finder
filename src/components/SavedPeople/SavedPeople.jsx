import React from 'react';

import Card from '../Card/Card';
import FilterBox from './FilterBox';

import {
  SavedPeopleContainer,
  SavedPeopleScroll,
  SavedPeopleTitle,
  SavedPeopleFiltersContainer,
  SavedPeopleEmptyText,
} from './SavedPeople.styles';

const SavedPeople = () => {
  const savedPeople = [];

  const CardsMarkUp = savedPeople.length ? (
    savedPeople.map((character, characterIndex) => {
      return <Card key={characterIndex} character={character} />;
    })
  ) : (
    <SavedPeopleEmptyText>You did not save any people yet!</SavedPeopleEmptyText>
  );

  return (
    <SavedPeopleContainer>
      <SavedPeopleTitle>Saved people</SavedPeopleTitle>
      <SavedPeopleFiltersContainer>
        <FilterBox genderArray={['male', 'female']} />
      </SavedPeopleFiltersContainer>
      <SavedPeopleScroll>{CardsMarkUp}</SavedPeopleScroll>
    </SavedPeopleContainer>
  );
};

export default SavedPeople;
