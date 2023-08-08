import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { Movement } from '../types/movements';

interface MovementsState {
  history: Movement[];
}

type Action =
  | { type: 'ADD_MOVEMENT'; payload: Movement }
  | { type: 'UPDATE_MOVEMENT'; payload: { id: number; completed: boolean } }
  | { type: 'DELETE_MOVEMENT'; payload: number };

type MovementsDispatch = Dispatch<Action>;

const MovementsContext = createContext<{ state: MovementsState; dispatch: MovementsDispatch }>({
  state: { history: [] },
  dispatch: () => {},
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
    default:
      return state;
  }
};

const MovementsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(movementsReducer, { history: [] });

  return (
    <MovementsContext.Provider value={{ state, dispatch }}>{children}</MovementsContext.Provider>
  );
};

const useMovementsContext = () => useContext(MovementsContext);

export { MovementsProvider, useMovementsContext };
