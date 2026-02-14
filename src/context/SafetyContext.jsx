import { createContext, useContext, useState } from "react";

const SafetyContext = createContext();

export function SafetyProvider({ children }) {
  const [score, setScore] = useState(75);

  return (
    <SafetyContext.Provider value={{ score, setScore }}>
      {children}
    </SafetyContext.Provider>
  );
}

export function useSafety() {
  return useContext(SafetyContext);
}
