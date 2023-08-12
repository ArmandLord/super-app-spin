import 'react-native-gesture-handler';
import React, { createContext, useContext, useReducer } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export type AppState = {
  points: number,
  exchangePoints: (points: number) => void,
}

const initialState: AppState = {
  points: 10001,
  exchangePoints: () => {},
}

export type Action = 
| {type: 'DECREASE_POINTS', payload: number}
| {type: 'INCREASE_POINTS', payload: number};

const AppReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'DECREASE_POINTS':
      return {
        ...state,
        points: state.points - action.payload
      };
  }
  return state;
}

const AppContext = createContext<AppState>(initialState);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
  const [{points}, dispatch] = useReducer(AppReducer, initialState);

  const exchangePoints = (points: number) => {
    dispatch({type: 'DECREASE_POINTS', payload: points});
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