import React, { createContext, useContext, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AppState = {
  points: number,
  decreasePoints: (points: number) => void,
  increasePoints: (points: number) => void,
  setPoints: (points: number) => void,
}

const initialState: AppState = {
  points: 0,
  decreasePoints: () => {},
  increasePoints: () => {},
  setPoints: () => {},
}

export type Action = 
| {type: 'SET_POINTS', payload: number}
| {type: 'DECREASE_POINTS', payload: number}
| {type: 'INCREASE_POINTS', payload: number};

const AppReducer = (state: AppState, action: Action): AppState => {
  
  let newPoinst = 0;
  
  switch (action.type) {
    case 'SET_POINTS':
      return {
        ...state,
        points: action.payload
      };
    case 'DECREASE_POINTS':
      newPoinst = state.points - action.payload;
      AsyncStorage.setItem('points', newPoinst.toString());
      return {
        ...state,
        points: newPoinst
      };
    case 'INCREASE_POINTS':
      newPoinst = state.points + action.payload;
      AsyncStorage.setItem('points', newPoinst.toString());
      return {
        ...state,
        points: newPoinst
      };
  }
  return state;
}

const AppContext = createContext<AppState>(initialState);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
  const [{points}, dispatch] = useReducer(AppReducer, initialState);

  const decreasePoints = (points: number) => {
    dispatch({type: 'DECREASE_POINTS', payload: points});
  }

  const increasePoints = (points: number) => {
    dispatch({type: 'INCREASE_POINTS', payload: points});
  }

  const setPoints = (points: number) => {
    dispatch({type: 'SET_POINTS', payload: points});
  }

  const theme = {
    points,
    decreasePoints,
    increasePoints,
    setPoints,
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