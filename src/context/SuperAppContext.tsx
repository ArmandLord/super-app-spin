import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { Movement } from '../types/movements';


interface MovementsState {
  history: Movement[];
  categories: string[];
  selectedCategory: string | null;
  points: number;
  tabBar: boolean;
}

type Action =
  | { type: 'ADD_MOVEMENT'; payload: Movement }
  | { type: 'UPDATE_MOVEMENT'; payload: { id: number; completed: boolean } }
  | { type: 'DELETE_MOVEMENT'; payload: number }
  | { type: 'SELECT_CATEGORY'; payload: string }
  | { type: 'ADD_POINTS'; payload: number }
  | { type: 'SHOW_TAB'; payload: boolean };



type MovementsDispatch = Dispatch<Action>;

const MovementsContext = createContext<{ state: MovementsState; dispatch: MovementsDispatch }>({
  state: { history: [], categories: [], selectedCategory: null, points: 0, tabBar: true },
  dispatch: () => { },
});

const movementsReducer = (state: MovementsState, action: Action): MovementsState => {
  switch (action.type) {
    case 'ADD_MOVEMENT':
      return { ...state, history: [...state.history, action.payload] };
    case 'UPDATE_MOVEMENT':
      return {
        ...state,
        history: state.history.map((movement) =>
          movement.id === action.payload.id ? { ...movement, completed: action.payload.completed } : movement
        ),
      };
    case 'DELETE_MOVEMENT':
      return {
        ...state,
        history: state.history.filter((movement) => movement.id !== action.payload),
      };
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case 'ADD_POINTS':
      return {
        ...state, points: action.payload
      }
    case 'SHOW_TAB':
      return { ...state, tabBar: action.payload }
    default:
      return state;
  }
};

const MovementsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(movementsReducer, { history: [], categories: [], selectedCategory: null, points: 0, tabBar: true });

  return (
    <MovementsContext.Provider value={{ state, dispatch }}>{children}</MovementsContext.Provider>
  );
};

const useMovementsContext = () => useContext(MovementsContext);

export { MovementsProvider, useMovementsContext };
