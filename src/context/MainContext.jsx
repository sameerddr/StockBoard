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

  const [url, setUrl] = useState(
    "https://api.coingecko.com/api/v3/exchange_rates"
  );
  const [rateData, setRateData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchdata, setSearchData] = useState(null);

  return (
    <MainContext.Provider
      value={{
        input,
        setInput,
        inputt,
        setInputt,
        isloggedin,
        setIsLoggedin,
        url,
        setUrl,
        rateData,
        setRateData,
        search,
        setSearch,
        searchdata,
        setSearchData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
export { MainContext, MainStateProvider };
