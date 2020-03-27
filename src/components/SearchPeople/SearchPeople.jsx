import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectSearchArray,
  selectSavedArray,
  selectLoadingData,
} from '../../redux/reducers/dataReducer';
import { fetchApiStart, setSeachText } from '../../redux/actions/dataActions';
import { getFilteredSearchArray } from '../../helpers/filters';

import Spinner from '../Spinner/Spinner';
import SearchBox from '../SearchBox/SearchBox';
import CustomButton from '../CustomButton/CustomButton';
import Character from './Character';
import Pagination from './Pagination';

import {
  SearchPeopleContainer,
  SearchPeopleSearchBox,
  SearchPeopleSpinnerContainer,
  SearchPeopleTable,
  SearchPeopleTitle,
  TableBody,
  TableHeader,
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
  const [viewWidth, setViewWidth] = useState(0);
  const [searchText, setSearchText] = useState('');
  const { searchArray, savedArray, loadingData } = useSelector(selectSearchPeopleData);

  const filteredSearchArray = getFilteredSearchArray(searchArray, savedArray);

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    setViewWidth(vw);
  }, []);

  const handleChange = event => {
    const { value } = event.target;
    setSearchText(value);
  };

  const handleSearch = useCallback(() => {
    dispatch(fetchApiStart(`https://swapi.co/api/people/?search=${searchText}`));
    dispatch(setSeachText(searchText));
    setSearchText('');
  }, [dispatch, searchText, fetchApiStart, setSearchText]);

  const tableHeaderMarkUp =
    viewWidth <= 600 ? (
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th />
      </tr>
    ) : (
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Birth year</th>
        <th>Eye Color</th>
        <th />
      </tr>
    );

  const tableBodyMarkUp = filteredSearchArray.length ? (
    filteredSearchArray.map(character => (
      <Character character={character} viewWidth={viewWidth} key={character.name} />
    ))
  ) : (
    <tr>
      <td colSpan={viewWidth < 600 ? 3 : 5}>All characeters in this page are already saved</td>
    </tr>
  );

  return (
    <SearchPeopleContainer>
      {(loadingData || viewWidth === 0) && (
        <SearchPeopleSpinnerContainer>
          <Spinner />
        </SearchPeopleSpinnerContainer>
      )}
      <SearchPeopleTitle>Search people</SearchPeopleTitle>
      <SearchPeopleSearchBox>
        <SearchBox
          name="searchText"
          value={searchText}
          id="searchText"
          onSearchChange={handleChange}
          label="Search people"
        />
        <CustomButton
          type="button"
          variant="default"
          size={viewWidth < 1400 ? 'medium' : 'small'}
          onClick={handleSearch}
        >
          Search
        </CustomButton>
      </SearchPeopleSearchBox>
      <TableScroll>
        <SearchPeopleTable>
          <TableHeader>{tableHeaderMarkUp}</TableHeader>
          <TableBody>{tableBodyMarkUp}</TableBody>
        </SearchPeopleTable>
      </TableScroll>
      <TablePaginationContainer>
        <Pagination />
      </TablePaginationContainer>
    </SearchPeopleContainer>
  );
};

export default SearchPeople;
