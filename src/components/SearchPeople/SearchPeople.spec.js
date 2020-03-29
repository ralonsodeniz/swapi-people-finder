import React from 'react';
import { shallow } from 'enzyme';
import * as Redux from 'react-redux';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { dataStore, loadingDataStore } from '../../../__mocks__/dataStateMock';
import * as dataActions from '../../redux/actions/dataActions';

import SearchPeople from './SearchPeople';
import { SearchBoxInput } from '../SearchBox/SearchBox.styles';

describe('<SearchPeople /> tests', () => {
  let wrapper;
  let store;
  let useEffect;
  let fetchApiStart;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    fetchApiStart = jest.spyOn(dataActions, 'fetchApiStart');
  });

  describe('store with data tests', () => {
    beforeEach(() => {
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));
      mockUseEffect();

      store = configureStore([thunkMiddleware])(dataStore);
      jest.spyOn(Redux, 'useDispatch').mockImplementation(() => store.dispatch);
      jest.spyOn(Redux, 'useSelector').mockImplementation(() => store.getState());
      store.clearActions();
      wrapper = shallow(<SearchPeople store={store} />);
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders proper tr for header with 3 th with Name, Gender and "" for mobile devices', () => {
      const tableHeaders = wrapper.find('th');
      expect(tableHeaders.length).toEqual(3);
      const firstTableHeaderText = tableHeaders.at(0).text();
      expect(firstTableHeaderText).toEqual('Name');
      const secondTableHeaderText = tableHeaders.at(1).text();
      expect(secondTableHeaderText).toEqual('Gender');
      const thirdTableHeaderText = tableHeaders.at(2).text();
      expect(thirdTableHeaderText).toEqual('');
    });

    it('filters searchArray with savedArray and renders 7 Characters', () => {
      const characters = wrapper.find('Character');
      expect(characters.length).toEqual(7);
      const firstCharacter = characters.at(0).prop('character');
      expect(firstCharacter.name).toEqual('C-3PO');
      const secondCharacter = characters.at(1).prop('character');
      expect(secondCharacter.name).toEqual('Darth Vader');
      const thirdCharacter = characters.at(2).prop('character');
      expect(thirdCharacter.name).toEqual('Owen Lars');
      const fourthCharacter = characters.at(3).prop('character');
      expect(fourthCharacter.name).toEqual('Beru Whitesun lars');
      const fifthCharacter = characters.at(4).prop('character');
      expect(fifthCharacter.name).toEqual('R5-D4');
      const sixthCharacter = characters.at(5).prop('character');
      expect(sixthCharacter.name).toEqual('Biggs Darklighter');
      const seventhCharacter = characters.at(6).prop('character');
      expect(seventhCharacter.name).toEqual('Obi-Wan Kenobi');
    });

    it('changes searchField to skywalker, sends the fetch action with proper url when button is clicked and sets searchtext and resets searchfield', () => {
      const searchBox = wrapper.find('SearchBox');
      expect(searchBox.length).toEqual(1);
      const searchBoxInput = searchBox.dive().find(SearchBoxInput);
      expect(searchBoxInput.length).toEqual(1);
      searchBoxInput.simulate('change', { target: { value: 'skywalker' } });
      const searchBoxValue = wrapper.find('SearchBox').prop('value');
      expect(searchBoxValue).toEqual('skywalker');
      const button = wrapper.find('CustomButton');
      expect(button.length).toEqual(1);
      button.simulate('click');
      expect(fetchApiStart).toHaveBeenCalledWith(
        `https://swapi.co/api/people/?search=${searchBoxValue}`
      );
      const newSearchBoxValue = wrapper.find('SearchBox').prop('value');
      expect(newSearchBoxValue).toEqual('');
      const actions = store.getActions();
      const expectedActionToogleDataLoading = dataActions.toggleDataLoading(true);
      const expectedActionSetSearchText = dataActions.setSeachText(searchBoxValue);
      expect(actions[0]).toEqual(expectedActionToogleDataLoading);
      expect(actions[1]).toEqual(expectedActionSetSearchText);
    });
  });

  describe('data loading tests', () => {
    beforeEach(() => {
      global.innerWidth = 1920;
      global.dispatchEvent(new Event('resize'));
      mockUseEffect();

      store = configureStore([thunkMiddleware])(loadingDataStore);
      jest.spyOn(Redux, 'useDispatch').mockImplementation(() => store.dispatch);
      jest.spyOn(Redux, 'useSelector').mockImplementation(() => store.getState());
      store.clearActions();
      wrapper = shallow(<SearchPeople store={store} />);
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders proper tr for header with 5 th with Name, Gender, Birth year, Eye color and "" for desktop and table devices', () => {
      const tableHeaders = wrapper.find('th');
      expect(tableHeaders.length).toEqual(5);
      const firstTableHeaderText = tableHeaders.at(0).text();
      expect(firstTableHeaderText).toEqual('Name');
      const secondTableHeaderText = tableHeaders.at(1).text();
      expect(secondTableHeaderText).toEqual('Gender');
      const thirdTableHeaderText = tableHeaders.at(2).text();
      expect(thirdTableHeaderText).toEqual('Birth year');
      const fourthTableHeaderText = tableHeaders.at(3).text();
      expect(fourthTableHeaderText).toEqual('Eye color');
      const fifthTableHeaderText = tableHeaders.at(4).text();
      expect(fifthTableHeaderText).toEqual('');
    });

    it('renders Spinner and no Characters but a placeholder td with a colSpan of 5', () => {
      const spinner = wrapper.find('Spinner');
      expect(spinner.length).toEqual(1);
      const characters = wrapper.find('Character');
      expect(characters.length).toEqual(0);
      const placeholder = wrapper.find('td');
      expect(placeholder.length).toEqual(1);
      const placeholderColSpan = placeholder.prop('colSpan');
      expect(placeholderColSpan).toEqual(5);
      const placeholderText = placeholder.text();
      expect(placeholderText).toEqual('All characeters in this page are already saved');
    });
  });
});
