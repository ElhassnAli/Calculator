import { createContext, useContext } from "react";

const MainContext = createContext();

function MainContextProvider({ children, value }) {
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default MainContextProvider;

export function useMainContext() {
  const data = useContext(MainContext);

  return data;
}
