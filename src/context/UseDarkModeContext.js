import { createContext, useReducer } from 'react';
import UseDarkModeReducer from './UseDarkModeReducer';

const INITIAL_STATE = {
  darkMode: false,
};

export const UseDarkModeContext = createContext(INITIAL_STATE);

export const UseDarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UseDarkModeReducer, INITIAL_STATE);

  return (
    <UseDarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </UseDarkModeContext.Provider>
  );
};
