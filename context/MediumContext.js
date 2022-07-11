import { createContext, useState } from "react";

export const MediumContext = createContext();

export const MediumProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <MediumContext.Provider value={{ user }}>{children}</MediumContext.Provider>
  );
};
