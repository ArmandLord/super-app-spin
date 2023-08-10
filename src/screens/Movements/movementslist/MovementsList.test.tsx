import React from 'react';
import { render } from '@testing-library/react-native';
import { MovementsList } from './MovementsList'; 

// Mock del módulo useNavigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

// Mock del módulo ListItem
jest.mock('../../../components/DataDisplay/ListItem', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

describe('MovementsList', () => {
  it('renders correctly', () => {
    const movements = [
      { title: 'Section 1', data: [{ entity: 'Oxxo', operation: 'earned', points: 100, date: '2023-08-10' }] },
    ];
    const getData = jest.fn();
    const loading = false;
    const moreData = true;

    const { getByTestId } = render(
      <MovementsList movements={movements} getData={getData} loading={loading} moreData={moreData} />
    );
    
    const sectionList = getByTestId('section-list');
    
    expect(sectionList).toBeTruthy();
  });

});
