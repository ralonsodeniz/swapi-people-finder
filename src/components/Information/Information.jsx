import React from 'react';

import InformationSkeleton from '../InformationSkeleton/InformationSkeleton';

import detailTitles from '../../helpers/detailTitles';

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
      <InformationImage alt="character" src={selectedCharacter.imageUrl} />
      <CharacterName>{selectedCharacter.name}</CharacterName>
      <CharacterDetailsContainer>{characterInfoMarkUp}</CharacterDetailsContainer>
    </InformationContainer>
  ) : (
    <InformationSkeleton />
  );
};

export default Information;
