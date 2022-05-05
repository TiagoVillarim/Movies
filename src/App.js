import React                                      from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home                                       from "./Components/Pages/home";
import Login                                      from "./Components/Pages/Login";
import Signin                                     from "./Components/Pages/SignIn";
import Movie                                      from "./Components/Pages/movie";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/movie" element={<Movie/>}/>
      </Routes>
    </Router>
  );
}

export default App;
