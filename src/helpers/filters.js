export const getFilterArray = savedArray => {
  const filterArray = savedArray.reduce((accumulator, character) => {
    const { gender } = character;
    const genderExists = accumulator.some(storedGender => storedGender === gender);
    if (!genderExists) accumulator.push(gender);
    return accumulator;
  }, []);
  return filterArray;
};

export const getFilteredSavedArray = (savedArray, savedFilter) => {
  if (savedFilter === 'All') return savedArray;
  const filteredSavedArray = savedArray.filter(character => character.gender === savedFilter);
  return filteredSavedArray;
};

export const getFilteredSearchArray = (searchArray, savedArray) => {
  const filteredSearchArray = searchArray.reduce((accumulator, character) => {
    const { name } = character;
    const characterExists = savedArray.some(character => character.name === name);
    if (!characterExists) accumulator.push(character);
    return accumulator;
  }, []);
  return filteredSearchArray;
};
