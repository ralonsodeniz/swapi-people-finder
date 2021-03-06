/* eslint-disable react/no-array-index-key */
import React from 'react';

import NoImg from '../../../assets/noImg.png';

import {
  InformationSkeletonContainer,
  CharacterDetailsContainer,
  CharacterInfo,
  CharacterInfoPlaceholder,
  CharacterName,
  InformationSkeletonImage,
  InformationSkeletonTitle,
} from './InformationSkeleton.styles';

const InformationSkeleton = () => {
  const characterDetailsPlaceholderMarkUp = Array.from({ length: 7 }).map((info, infoIndex) => (
    <CharacterInfo key={infoIndex}>
      <CharacterInfoPlaceholder />
    </CharacterInfo>
  ));

  return (
    <InformationSkeletonContainer>
      <InformationSkeletonTitle>Information about...</InformationSkeletonTitle>
      <InformationSkeletonImage alt="character" src={NoImg} />
      <CharacterName>No one is selected...</CharacterName>
      <CharacterDetailsContainer>{characterDetailsPlaceholderMarkUp}</CharacterDetailsContainer>
    </InformationSkeletonContainer>
  );
};

export default InformationSkeleton;
