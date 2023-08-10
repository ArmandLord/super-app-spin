import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AllMovementsList from './AllMovementsList'; 

// Mock del módulo useMovements
jest.mock('../../../hooks/useMovements', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    movements: [],
    getMovements: jest.fn(),
    loading: false,
    moreData: true,
  })),
}));

describe('AllMovementsList', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<AllMovementsList />);
    
    const movementsList = getByTestId('movements-list');
    
    expect(movementsList).toBeTruthy();
  });

  it('calls getMovements function on button click', async () => {
    const getMovements = jest.fn();
    (useMovements as jest.Mock).mockReturnValue({
      movements: [],
      getMovements,
      loading: false,
      moreData: true,
    });

    const { getByTestId } = render(<AllMovementsList />);
    
    const fetchButton = getByTestId('fetch-button');
    
    fireEvent.press(fetchButton);
    
    await waitFor(() => {
      expect(getMovements).toHaveBeenCalledTimes(1);
    });
  });
});
