import DATA from '../types/dataTypes';
import * as actions from './dataActions';

describe('actions', () => {
  test('should create an action to set loading data to true', () => {
    const expectedAction = {
      type: DATA.TOGGLE_DATA_LOADING,
      payload: true,
    };
    expect(actions.toogleDataLoading(true)).toEqual(expectedAction);
  });

  test('should create an action to start fetching api', () => {
    const url = 'api url';
    const expectedAction = {
      type: DATA.FETCH_API_START,
      payload: url,
    };
    expect(actions.fetchApiStart(url)).toEqual(expectedAction);
  });

  test('should create an action with the response of the fetch call', () => {
    const fetchedData = [
      {
        id: 0,
        name: 'Tobus Quickwhistle',
        thumbnail:
          'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
        age: 306,
        weight: 39.065952,
        height: 107.75835,
        hairColor: 'Pink',
        professions: ['Metalworker', 'Woodcarver', 'Stonecarver', 'Tinker', 'Tailor', 'Potter'],
        friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
      },
    ];
    const expectedAction = {
      type: DATA.FETCH_API_SUCCESS,
      payload: fetchedData,
    };
    expect(actions.fetchApiSuccess(fetchedData)).toEqual(expectedAction);
  });

  test('should create an action with the error from the api', () => {
    const error = 'random error';
    const expectedAction = {
      type: DATA.FETCH_API_FAILURE,
      payload: error,
    };
    expect(actions.fetchApiFailure(error)).toEqual(expectedAction);
  });

  test('should create an action with new data from gnome name searchfield', () => {
    const gnomeName = 'random gnome name';
    const expectedAction = {
      type: DATA.SET_GNOME_NAME_SEARCHFIELD,
      payload: gnomeName,
    };
    expect(actions.setGnomeNameSearchField(gnomeName)).toEqual(expectedAction);
  });

  test('should create an action with new data from profession searchfield', () => {
    const profession = 'random profession';
    const expectedAction = {
      type: DATA.SET_PROFESSION_SEARCHFIELD,
      payload: profession,
    };
    expect(actions.setProfessionSearchField(profession)).toEqual(expectedAction);
  });
});
