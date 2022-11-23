import { Route, Routes } from "react-router-dom";

<<<<<<< HEAD
import Header from "./components/header/Header";
// import Dashboardnav from "./components/header/Dashboardnav";
import Exchange from "./components/header/Exchange";
import Wallett from "./components/header/Wallett";
import Market from "./components/header/Market";
import Login from "./components/header/Login";
import Register from "./components/header/Register";
import WelcomePage from "./components/header/WelcomePage";
import Main from "./components/header/Main";
import StockLayout from "./components/Layout/StockLayout";
=======
import Header from "./Components/header/Header";
// import Dashboardnav from "./components/header/Dashboardnav";
import Exchange from "./Components/header/Exchange";
import Wallett from "./Components/header/Wallett";
import Market from "./Components/header/Market";
import Login from "./Components/header/Login";
import Register from "./Components/header/Register";
import WelcomePage from "./Components/header/WelcomePage";
import Main from "./Components/header/Main";
import StockLayout from "./Components/Layout/StockLayout";
import ContactUs from "./Components/ContactUs/ContactUs";
import { Trade } from "./Components/trade/Trade";
>>>>>>> 5dd878315c77a6dd151a04d0f0daa6d4183fed3f
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
        <Route path="/trade" element={<Trade />} />
        <Route path="/market" element={<Wallett />} />
        <Route path="/contact" element={<ContactUs />} />
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
