import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./component/view/LandingPage/LandingPage";
import LoginPage from "./component/view/LoginPage/LoginPage";
import RegisterPage from "./component/view/RegisterPage/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path ="/login" element={<LoginPage/>}/>
        <Route path = "/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;