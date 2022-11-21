import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Dashboardnav from "./components/header/Dashboardnav";
import Exchange from "./components/header/Exchange";
import Wallett from "./components/header/Wallett";
import Market from "./components/header/Market";
import Login from "./components/header/Login";
import Register from "./components/header/Register";
import WelcomePage from "./components/header/WelcomePage";
import Main from "./components/header/Main";
import StockLayout from "./components/Layout/StockLayout";
// import Graph1 from "./Components/Graphs/Graph1";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<Dashboardnav />} /> */}
        <Route exact path="/" element={<StockLayout />} />
        <Route path="/Exchange" element={<Exchange />} />
        <Route path="/Wallett" element={<Wallett />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Main" element={<Main />} />
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
