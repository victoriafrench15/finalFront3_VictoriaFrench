import { createContext} from "react";


const ContextGlobal = createContext();

export default ContextGlobal;

export const ContextProvider = ({ children }) => {

  return (
    <ContextGlobal.Provider value={{ }}>
      {children}
    </ContextGlobal.Provider>
  );
};