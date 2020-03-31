export const getFilterArray = savedArray => {
  return savedArray.reduce((accumulator, character) => {
    const { gender } = character;
    const genderExists = accumulator.some(storedGender => storedGender === gender);
    return !genderExists ? [...accumulator, gender] : accumulator;
  }, []);
};

export const getFilteredSavedArray = (savedArray, savedFilter) => {
  return savedFilter === 'All'
    ? savedArray
    : savedArray.filter(character => character.gender === savedFilter);
};

export const getFilteredSearchArray = (searchArray, savedArray) => {
  return searchArray.reduce((accumulator, character) => {
    const { name } = character;
    const characterExists = savedArray.some(character => character.name === name);
    return !characterExists ? [...accumulator, character] : accumulator;
  }, []);
};
