import React from 'react';
import { shallow } from 'enzyme';
import * as Redux from 'react-redux';
import configureStore from 'redux-mock-store';

import { c3p0, darthVader } from '../../../__mocks__/charInfoMock';
import { selectCharacter, removeCharacter } from '../../redux/actions/dataActions';

import Card from './Card';
import { CardImage, CardDetailsTitle } from './Card.styles';

describe('<Card /> tests', () => {
  let wrapper;
  let store;
  const getWrapper = mockProps => shallow(<Card character={mockProps} store={store} />);
  const selectCharacterAction = selectCharacter(c3p0);
  const removeCharacterAction = removeCharacter(c3p0.name);

  beforeEach(() => {
    store = configureStore()({});
    jest.spyOn(Redux, 'useDispatch').mockImplementation(() => store.dispatch);
    wrapper = getWrapper(c3p0);
    store.clearActions();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has one img with src to C-3PO portrait', () => {
    const img = wrapper.find(CardImage);
    expect(img.length).toEqual(1);
    const imageUrl = img.prop('src');
    expect(imageUrl).toEqual('http://facetheforce.today/c3po/240');
  });

  it('has one img with src to Darth Vader portrait', () => {
    wrapper = getWrapper(darthVader);
    const img = wrapper.find(CardImage);
    expect(img.length).toEqual(1);
    const imageUrl = img.prop('src');
    expect(imageUrl).toEqual('http://facetheforce.today/darthvader/240');
  });

  it('has one title with text C-3PO', () => {
    const title = wrapper.find(CardDetailsTitle);
    expect(title.length).toEqual(1);
    const titleText = title.text();
    expect(titleText.slice(0, titleText.search('<'))).toEqual('C-3PO');
  });

  it('has two buttons', () => {
    const buttons = wrapper.find('CustomButton');
    expect(buttons.length).toEqual(2);
  });

  it('has one default small size Detail button that triggrs selectCharacter action', () => {
    const button = wrapper.find('CustomButton').at(0);
    const buttonText = button.shallow().text();
    expect(buttonText).toEqual('Details');
    const buttonSize = button.prop('size');
    expect(buttonSize).toEqual('small');
    const buttonVariant = button.prop('variant');
    expect(buttonVariant).toEqual('default');
    button.simulate('click');
    const actions = store.getActions();
    expect(actions).toEqual([selectCharacterAction]);
  });

  it('has one remove small size Remove button that triggrs removeCharacterAction action', () => {
    const button = wrapper.find('CustomButton').at(1);
    const buttonText = button.shallow().text();
    expect(buttonText).toEqual('Remove');
    const buttonSize = button.prop('size');
    expect(buttonSize).toEqual('small');
    const buttonVariant = button.prop('variant');
    expect(buttonVariant).toEqual('remove');
    button.simulate('click');
    const actions = store.getActions();
    expect(actions).toEqual([removeCharacterAction]);
  });
});
