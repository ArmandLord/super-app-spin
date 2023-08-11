import 'react-native-gesture-handler';
import React, { createContext, useContext, useReducer } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export type AppState = {
  points: number,
  exchangePoints: (points: number) => void,
}

const initialState: AppState = {
  points: 900001,
  exchangePoints: () => {},
}

export type Action = 
| {type: 'EXCHANGE_POINTS', payload: number};

const AppReducer = (state: AppState, action: Action): AppState => {
  return state;
}

const AppContext = createContext<AppState>(initialState);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
  const [{points}, dispatch] = useReducer(AppReducer, initialState);

  const exchangePoints = (points: number) => {
    dispatch({type: 'EXCHANGE_POINTS', payload: points});
  }

  const theme = {
    points,
    exchangePoints,
  };

  return (
    <AppContext.Provider value={theme}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser utilizado dentro de AppProvider');
  }
  return context;
}