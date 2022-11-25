import { Route, Routes } from "react-router-dom";

import Header from "./Components/header/Header";
import Wallett from "./Components/header/Wallett";
import Login from "./Components/header/Login";
import Register from "./Components/header/Register";
import WelcomePage from "./Components/header/WelcomePage";
// import Main from "./Components/header/Main";
import StockLayout from "./Components/Layout/StockLayout";
import ContactUs from "./Components/ContactUs/ContactUs";
import { Trade } from "./Components/trade/Trade";
// import Graph1 from "./Components/Graphs/Graph1";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<StockLayout />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/market" element={<Wallett />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/Main" element={<Main />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcomePage" element={<WelcomePage />} />
      </Routes>
      {/* <StockLayout /> */}
      {/* <Cards/> */}
    </div>
  );
}

export default App;
