import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import { SizesType } from '../styles/types';

type Action =
  | {type: 'SET_SizesType_LIST'; payload: SizesType[]}
  | {type: 'SET_SELECTED_SizesType'; payload: SizesType | null};

type State = {
  SizesTypeList: SizesType[];
  mySizesTypes: SizesType[];
  selectedSizesType: SizesType | null;
};

type SizesTypeDetails = {
  name: string;
  id: number;
  url: string;
};

type SizesTypeContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
    fetchSizesTypeImage: (SizesType: SizesTypeDetails) => Promise<string>;
    selectSizesType: (SizesType: SizesType) => void;
  };
  

const SizesTypeContext = createContext<SizesTypeContextType>({
  state: {SizesTypeList: [], selectedSizesType: null, mySizesTypes: []},
  dispatch: () => null,
  fetchSizesTypeImage: async () => '',
  selectSizesType: () => {},
});

const SizesTypeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_SizesType_LIST':
      return {...state, SizesTypeList: action.payload};
    case 'SET_SELECTED_SizesType':
      return {...state, selectedSizesType: action.payload};
    default:
      return state;
  }
};

export const SizesTypeProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(SizesTypeReducer, {
    SizesTypeList: [],
    mySizesTypes: [],
    selectedSizesType: null,
  });


  const fetchSizesTypeImage = async (
    SizesType: SizesTypeDetails,
  ): Promise<string> => {
    const response = await fetch(SizesType.url);
    const data = await response.json();
    return data.sprites.front_default;
  };

 
  
  const selectSizesType = (SizesType: SizesType) => {
    dispatch({
      payload: SizesType,
      type: 'SET_SELECTED_SizesType',
    });
  };

  return (
    <SizesTypeContext.Provider
      value={{state, dispatch, fetchSizesTypeImage,selectSizesType}}>
      {children}
    </SizesTypeContext.Provider>
  );
};

export const useSizesTypeContext = () => useContext(SizesTypeContext);