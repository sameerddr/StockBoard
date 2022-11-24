import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Wallett from "./components/header/Wallett";
import Login from "./components/header/Login";
import Register from "./components/header/Register";
import WelcomePage from "./components/header/WelcomePage";
// import Main from "./components/header/Main";
import StockLayout from "./components/Layout/StockLayout";
import ContactUs from "./components/ContactUs/ContactUs";
import { Trade } from "./components/trade/Trade";
// import Graph1 from "./components/Graphs/Graph1";

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
