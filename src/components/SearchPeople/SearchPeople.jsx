/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import Spinner from '../Spinner/Spinner';
import SearchBox from '../SearchBox/SearchBox';
import CustomButton from '../CustomButton/CustomButton';

import {
  SearchPeopleContainer,
  SearchPeopleSearchBox,
  SearchPeopleSpinnerContainer,
  SearchPeopleTable,
  SearchPeopleTitle,
  TableBody,
  TableHeader,
  TableScroll,
  SearchPeopleButtonsContainer,
} from './SearchPeople.styles';

const SearchPeople = () => {
  const [deviceType, setDeviceType] = useState('');
  const [searchText, setSearchText] = useState('');
  const unsavedPeople = [];
  const loading = false;

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (vw <= 600) {
      setDeviceType('small');
    } else setDeviceType('large');
  }, []);

  const dataHeaderMarkUp =
    deviceType === 'small' ? (
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

  const handleChange = event => {
    const { value } = event.target;
    setSearchText(value);
  };

  const dataRowsMarkUp = unsavedPeople.map((char, charIndex) => {
    if (deviceType === 'small')
      return (
        <tr key={charIndex}>
          <td>{char.name}</td>
          <td>{char.gender}</td>
          <td>
            <SearchPeopleButtonsContainer>
              <CustomButton
                type="button"
                variant="default"
                size="small"
                collapse
                onClick={() => {}}
              >
                Details
              </CustomButton>
              <CustomButton type="button" variant="save" size="small" onClick={() => {}}>
                Save
              </CustomButton>
            </SearchPeopleButtonsContainer>
          </td>
        </tr>
      );
    return (
      <tr key={charIndex}>
        <td>{char.name}</td>
        <td>{char.gender}</td>
        <td>{char.birthYear}</td>
        <td>{char.eyeColor}</td>
        <td>
          <SearchPeopleButtonsContainer>
            <CustomButton type="button" variant="default" size="small" onClick={() => {}}>
              Details
            </CustomButton>
            <CustomButton type="button" variant="save" size="small" onClick={() => {}}>
              Save
            </CustomButton>
          </SearchPeopleButtonsContainer>
        </td>
      </tr>
    );
  });

  return (
    <SearchPeopleContainer>
      {(loading || deviceType === '') && (
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
      </SearchPeopleSearchBox>
      <TableScroll>
        <SearchPeopleTable>
          <TableHeader>{dataHeaderMarkUp}</TableHeader>
          <TableBody>{dataRowsMarkUp}</TableBody>
        </SearchPeopleTable>
      </TableScroll>
    </SearchPeopleContainer>
  );
};

export default SearchPeople;
