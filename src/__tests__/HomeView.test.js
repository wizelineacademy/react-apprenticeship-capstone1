import React from 'react';
import { render } from '@testing-library/react';
import HomeView from '../pages/HomeView/Homeview.page';
import AppContext from '../context/appContext';
import { MOCK_CREDENTIALS } from '../utils/const';
const toggleStyles = (value) => {
  return value;
};

const setSearchTerm = (value) => {
  initialState.searchTerm = value;
};

let initialState = {
  searchTerm: '',
  videos: [],
  styles: {
    customCard: { backgroundColor: '#fff', fontColor: '#000' },
    layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
  },
  toggleStyles,
  setSearchTerm,
  userProps: MOCK_CREDENTIALS,
};

describe('Testing the component elements', () => {
  test('Component is rendered', () => {
    render(
      <AppContext.Provider value={initialState}>
        <HomeView />
      </AppContext.Provider>
    );
  });
});
