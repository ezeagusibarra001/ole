import React, { useState } from "react";
const HomeContext = React.createContext();

export function HomeProvider(props) {
  //LOGIN
  const [login, setLogin] = useState({
    user: "elfan",
    pass: "nosveranvolver",
  });
  //LOGIN ESTADO
  const [logueado, setLogueado] = useState(false);
  //DECLARO QUIEN ES EL CONTEXT
  const value = {
    login,
    setLogin,
    logueado,
    setLogueado,
  };
  return <HomeContext.Provider value={value} {...props} />;
}
//EXPORTO EL CONTEXT
export function useHome() {
  const context = React.useContext(HomeContext);
  if (!context) {
    throw new Error("Something wrong had happended");
  }
  return context;
}
