/* eslint-disable react/jsx-indent */
import React from 'react';
import { useSelector } from 'react-redux';

import { selectCharacterSelected } from '../../redux/reducers/dataReducer';
import detailTitles from '../../helpers/detailTitles';
import getCharImage from '../../helpers/getCharImage';

import InformationSkeleton from '../InformationSkeleton/InformationSkeleton';

import {
  InformationContainer,
  CharacterDetailsContainer,
  CharacterInfo,
  CharacterInfoTitle,
  CharacterName,
  InformationImage,
  InformationTitle,
} from './Information.styles';

const Information = () => {
  const characterSelected = useSelector(selectCharacterSelected);

  const imageUrl = characterSelected && getCharImage(characterSelected.name, '320');

  const characterInfoMarkUp =
    characterSelected &&
    Object.entries(characterSelected).reduce((accumulator, detail) => {
      const [key, value] = detail;
      return key !== 'name'
        ? [
            ...accumulator,
            <CharacterInfo key={key}>
              <CharacterInfoTitle>{detailTitles[key]}</CharacterInfoTitle>
              <span>: {value}</span>
            </CharacterInfo>,
          ]
        : accumulator;
    }, []);

  return characterSelected ? (
    <InformationContainer>
      <InformationTitle>Information about...</InformationTitle>
      <InformationImage alt="character" src={imageUrl} />
      <CharacterName>{characterSelected.name}</CharacterName>
      <CharacterDetailsContainer>{characterInfoMarkUp}</CharacterDetailsContainer>
    </InformationContainer>
  ) : (
    <InformationSkeleton />
  );
};

export default Information;
