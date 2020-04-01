import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectSearchArray,
  selectSavedArray,
  selectLoadingData,
} from '../../redux/reducers/dataReducer';
import { fetchApiStart, setSeachText } from '../../redux/actions/dataActions';
import { getFilteredSearchArray } from '../../helpers/filters';
import useDeviceType from '../../helpers/useDeviceType';

import Spinner from '../Spinner/Spinner';
import SearchBox from '../SearchBox/SearchBox';
import CustomButton from '../CustomButton/CustomButton';
import Pagination from './Pagination';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

import {
  SearchPeopleContainer,
  SearchPeopleSearchBox,
  SearchPeopleSpinnerContainer,
  SearchPeopleTable,
  SearchPeopleTitle,
  TableBodyContainer,
  TableHeaderContainer,
  TableScroll,
  TablePaginationContainer,
} from './SearchPeople.styles';

const selectSearchPeopleData = createStructuredSelector({
  searchArray: selectSearchArray,
  savedArray: selectSavedArray,
  loadingData: selectLoadingData,
});

const SearchPeople = () => {
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState('');
  const { searchArray, savedArray, loadingData } = useSelector(selectSearchPeopleData);

  const filteredSearchArray = getFilteredSearchArray(searchArray, savedArray);

  const deviceType = useDeviceType();

  const handleChange = event => {
    const { value } = event.target;
    setSearchField(value);
  };

  const handleSearch = useCallback(() => {
    dispatch(fetchApiStart(`https://swapi.co/api/people/?search=${searchField}`));
    dispatch(setSeachText(searchField));
    setSearchField('');
  }, [dispatch, searchField, fetchApiStart, setSearchField]);

  return (
    <SearchPeopleContainer>
      {(loadingData || !deviceType) && (
        <SearchPeopleSpinnerContainer>
          <Spinner />
        </SearchPeopleSpinnerContainer>
      )}
      <SearchPeopleTitle>Search people</SearchPeopleTitle>
      <SearchPeopleSearchBox>
        <SearchBox
          name="searchField"
          value={searchField}
          id="searchField"
          onSearchChange={handleChange}
          label="Search people"
        />
        <CustomButton
          type="button"
          variant="default"
          size={deviceType === 'big-desktop' ? 'medium' : 'small'}
          onClick={handleSearch}
        >
          Search
        </CustomButton>
      </SearchPeopleSearchBox>
      <TableScroll>
        <SearchPeopleTable>
          {deviceType && (
            <>
              <TableHeaderContainer>
                <TableHeader deviceType={deviceType} />
              </TableHeaderContainer>
              <TableBodyContainer>
                <TableBody
                  deviceType={deviceType}
                  filteredSearchArray={filteredSearchArray}
                  searchArray={searchArray}
                />
              </TableBodyContainer>
            </>
          )}
        </SearchPeopleTable>
      </TableScroll>
      <TablePaginationContainer>
        <Pagination />
      </TablePaginationContainer>
    </SearchPeopleContainer>
  );
};

export default SearchPeople;
