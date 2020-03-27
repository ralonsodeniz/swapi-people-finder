import React, { useEffect, useState } from 'react';

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

// import cardListMock from '../../../__mocks__/cardListMock';

const SearchPeople = () => {
  const [viewWidth, setViewWidth] = useState(0);
  const [searchText, setSearchText] = useState('');
  const unsavedPeople = [];
  const loading = false;

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    setViewWidth(vw);
  }, []);

  const handleChange = event => {
    const { value } = event.target;
    setSearchText(value);
  };

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

  const tableBodyMarkUp = unsavedPeople.length ? (
    unsavedPeople.map((character, characterIndex) => (
      <Character character={character} viewWidth={viewWidth} key={characterIndex} />
    ))
  ) : (
    <tr>
      <td colSpan={viewWidth < 600 ? 3 : 5}>All characeters in this page are already saved</td>
    </tr>
  );

  return (
    <SearchPeopleContainer>
      {(loading || viewWidth === 0) && (
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
          onClick={() => {}}
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
