import React from 'react';
import { render } from '@testing-library/react-native';
import  Movements  from './MovementsScreen'; 

// Mock del módulo TabView
jest.mock('react-native-tab-view', () => ({
  TabView: jest.fn(() => null),
  SceneMap: jest.fn(() => null),
}));

// Mock del módulo TabBar
jest.mock('../../../femsaComponents/components/TabBar/TabBar', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

// Mock de los componentes AllMovementsList, EarnedMovements y UsedMovements
jest.mock('./allmovements/AllMovementsList', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));
jest.mock('./earnedMovements/EarnedMovements', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));
jest.mock('./usedmovements/UsedMovements', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

describe('Movements', () => {
  it('renders correctly', () => {
    // Simular las dimensiones de la ventana
    const originalUseWindowDimensions = global.useWindowDimensions;
    global.useWindowDimensions = () => ({ width: 375, height: 812 });

    const { getByTestId } = render(<Movements />);
    
    const movementsContainer = getByTestId('movements-container');
    
    expect(movementsContainer).toBeTruthy();

    // Restaurar useWindowDimensions
    global.useWindowDimensions = originalUseWindowDimensions;
  });

  // Agrega más pruebas según sea necesario
});
