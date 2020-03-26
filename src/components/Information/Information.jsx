import React from 'react';

import {
  InformationContainer,
  CharacterDetailsContainer,
  CharacterInfo,
  CharacterInfoTitle,
  CharacterName,
  InformationImage,
  InformationTitle,
} from './Information.styles';

import characterInformationMock from '../../../__mocks__/characterInformationMock';

const Information = () => {
  return (
    <InformationContainer>
      <InformationTitle>Information about...</InformationTitle>
      <InformationImage alt="character" src="http://facetheforce.today/c3po" />
      <CharacterName>{characterInformationMock.name}</CharacterName>
      <CharacterDetailsContainer>
        {Object.entries(characterInformationMock).reduce((accumulator, detail, detailIndex) => {
          const [key, value] = detail;
          if (key !== 'name')
            accumulator.push(
              <CharacterInfo key={detailIndex}>
                <CharacterInfoTitle>{key}</CharacterInfoTitle>
                <span>: {value}</span>
              </CharacterInfo>
            );
          return accumulator;
        }, [])}
      </CharacterDetailsContainer>
    </InformationContainer>
  );
};

export default Information;
