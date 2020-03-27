/* eslint-disable camelcase */
import axios from 'axios';

export const getPageDataFromAPI = async url => {
  try {
    const { data } = await axios.get(url);
    const { count: characterCount, next: nextEndpoint, previous: previousEndpoint, results } = data;
    const searchArray = results.map(character => {
      const {
        hair_color: hairColor,
        skin_color: skinColor,
        eye_color: eyeColor,
        birth_year: birthYear,
        name,
        height,
        mass,
        gender,
      } = character;

      return {
        name,
        height,
        mass,
        gender,
        hairColor,
        skinColor,
        eyeColor,
        birthYear,
      };
    });
    const searchResult = {
      characterCount,
      nextEndpoint,
      previousEndpoint,
      searchArray,
    };

    return searchResult;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllDataFromAPi = async url => {
  let searchArray = [];
  try {
    const { data } = await axios.get(url);
    const { count: characterCount, results } = data;
    searchArray = results.map(character => {
      const {
        hair_color: hairColor,
        skin_color: skinColor,
        eye_color: eyeColor,
        birth_year: birthYear,
        name,
        height,
        mass,
        gender,
      } = character;

      return {
        name,
        height,
        mass,
        gender,
        hairColor,
        skinColor,
        eyeColor,
        birthYear,
      };
    });

    const numberOfPagesLeft = Math.ceil((characterCount - 1) / 10);
    const promises = Array.from({ length: numberOfPagesLeft - 1 }).map((page, pageIndex) =>
      axios.get(`${url}?page=${pageIndex + 2}`)
    );

    const resolvedPromises = await Promise.all(promises);

    searchArray = resolvedPromises.reduce((accumulator, resolvedPromise) => {
      const { data } = resolvedPromise;
      const { results } = data;
      const pageArray = results.map(character => {
        const {
          hair_color: hairColor,
          skin_color: skinColor,
          eye_color: eyeColor,
          birth_year: birthYear,
          name,
          height,
          mass,
          gender,
        } = character;

        return {
          name,
          height,
          mass,
          gender,
          hairColor,
          skinColor,
          eyeColor,
          birthYear,
        };
      });
      return [...accumulator, ...pageArray];
    }, searchArray);
    return searchArray;
  } catch (error) {
    throw new Error(error.message);
  }
};
