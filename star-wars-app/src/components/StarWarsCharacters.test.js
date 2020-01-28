// Component.test.js
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '..App/';
import reducer from './reducer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App /> test', () => {
  const getWrapper = (mockStore = createStore(reducer)) => mount(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );

  it('should add to count and display the correct # of counts', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('h3').text()).toEqual('Count: 0');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('h3').text()).toEqual('Count: 1');
  });

  it('should dispatch the correct action on button click', () => {
    const mockStore = createStore(reducer, { count: 0 });
    mockStore.dispatch = jest.fn();





// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';

// import { getData as mockGetData } from '../api';
// import App from '../App';
// import StarWarsCharacters from './StarWarsCharacters';

// jest.mock('../api');

// test('render App',() => {
//   //test if app renders
//   render(<App />)
// })

// test('render StarWarsCharacters', () => {
//   //test if StarWarsCharacters renders
//   render(<StarWarsCharacters />)
// })

// test('check if data is called once initially ', () => {
//   //test of data from the api is only called once
//   mockGetData()
//   expect(mockGetData).toHaveBeenCalledTimes(1);
// })

// test('check if data is called once on next click', () => {
//   //define getByText
//   const { getByText } = render(<StarWarsCharacters />)

//   //set text variables
//   const nextButton = getByText(/next/i);

//   //test if next button calls the api twice
//   fireEvent.click(nextButton)
//   expect(mockGetData).toHaveBeenCalledTimes(1);
// })

// test('check if data is called once on previous click', () => {
//   //define getByText
//   const { getByText } = render(<StarWarsCharacters />)

//   //set text variables
//   const previousButton = getByText(/previous/i);

//   //test if next button calls the api twice
//   fireEvent.click(previousButton)
//   expect(mockGetData).toHaveBeenCalledTimes(1);
// })