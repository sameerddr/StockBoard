import React, { createContext, useState } from "react";

const MainContext = createContext();

function MainStateProvider({ children }) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [inputt, setInputt] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isloggedin, setIsLoggedin] = useState(false);

  return (
    <MainContext.Provider
      value={{
        input,
        setInput,
        inputt,
        setInputt,
        isloggedin,
        setIsLoggedin,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
export { MainContext, MainStateProvider };
