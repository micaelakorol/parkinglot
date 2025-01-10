import React, { createContext, useEffect, useState } from "react";

export const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState({status:"", message:""});
  
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
