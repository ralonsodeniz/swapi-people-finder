import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSavedArray, selectSavedFilter } from '../../redux/reducers/dataReducer';
import { getFilterArray, getFilteredSavedArray } from '../../helpers/filters';

import Card from '../Card/Card';
import FilterBox from './FilterBox';

import {
  SavedPeopleContainer,
  SavedPeopleScroll,
  SavedPeopleTitle,
  SavedPeopleFiltersContainer,
  SavedPeopleEmptyText,
} from './SavedPeople.styles';

const selectSavedPeopleData = createStructuredSelector({
  savedArray: selectSavedArray,
  savedFilter: selectSavedFilter,
});

const SavedPeople = () => {
  const { savedArray, savedFilter } = useSelector(selectSavedPeopleData);

  const filterArray = getFilterArray(savedArray);

  const filteredSavedArray = getFilteredSavedArray(savedArray, savedFilter);

  const CardsMarkUp = filteredSavedArray.length ? (
    filteredSavedArray.map(character => {
      return <Card key={character.name} character={character} />;
    })
  ) : (
    <SavedPeopleEmptyText>You did not save any people yet!</SavedPeopleEmptyText>
  );

  return (
    <SavedPeopleContainer>
      <SavedPeopleTitle>Saved people</SavedPeopleTitle>
      <SavedPeopleFiltersContainer>
        <FilterBox filterArray={filterArray} />
      </SavedPeopleFiltersContainer>
      <SavedPeopleScroll>{CardsMarkUp}</SavedPeopleScroll>
    </SavedPeopleContainer>
  );
};

export default SavedPeople;
