import React from 'react';
import { render } from '@testing-library/react-native';
import  MovementsDetailsScreen  from './MovementsDetailsScreens'; 

describe('MovementsDetailsScreen', () => {
  it('renders correctly', () => {
    const movement = {
      entity: 'Oxxo',
      operation: 'earned',
      points: 100,
      date: '2023-08-10',
      transactionNo: '123456789',
    };

    const route = {
      params: {
        movement,
      },
    };

    const { getByText, getByAltText } = render(<MovementsDetailsScreen route={route} />);
    
    const entityText = getByText('Oxxo');
    const operationText = getByText('ganaste');
    const pointsText = getByText('+ 100');
    const transactionNoText = getByText('123456789');
    
    expect(entityText).toBeTruthy();
    expect(operationText).toBeTruthy();
    expect(pointsText).toBeTruthy();
    expect(transactionNoText).toBeTruthy();
  });
});
