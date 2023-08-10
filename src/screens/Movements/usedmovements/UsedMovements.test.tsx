import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import UsedMovements from './UsedMovements'; 

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

describe('UsedMovements', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<UsedMovements />);
    
    const movementsList = getByTestId('movements-list');
    
    expect(movementsList).toBeTruthy();
  });

  it('calls getMovements function on button click', async () => {
    const getMovements = jest.fn();
    (getMovements as jest.Mock).mockReturnValue({
      movements: [],
      getMovements,
      loading: false,
      moreData: true,
    });

    const { getByTestId } = render(<UsedMovements />);
    
    const fetchButton = getByTestId('fetch-button');
    
    fireEvent.press(fetchButton);
    
    await waitFor(() => {
      expect(getMovements).toHaveBeenCalledTimes(1);
    });
  });
});
