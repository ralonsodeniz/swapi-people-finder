import React from 'react';

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
  const selectedCharacter = [];

  const imageUrl = selectedCharacter.length && getCharImage(selectedCharacter.name, '320');

  const characterInfoMarkUp = Object.entries(selectedCharacter).reduce(
    (accumulator, detail, detailIndex) => {
      const [key, value] = detail;
      if (key !== 'name')
        accumulator.push(
          <CharacterInfo key={detailIndex}>
            <CharacterInfoTitle>{detailTitles[key]}</CharacterInfoTitle>
            <span>: {value}</span>
          </CharacterInfo>
        );
      return accumulator;
    },
    []
  );

  return selectedCharacter.length ? (
    <InformationContainer>
      <InformationTitle>Information about...</InformationTitle>
      <InformationImage alt="character" src={imageUrl} />
      <CharacterName>{selectedCharacter.name}</CharacterName>
      <CharacterDetailsContainer>{characterInfoMarkUp}</CharacterDetailsContainer>
    </InformationContainer>
  ) : (
    <InformationSkeleton />
  );
};

export default Information;
