import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Authorization from "./Components/Authorization";
import Registration from "./Components/Registration";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Authorization/>}/>
        </Routes>
    </Router>
  );
}

export default App;
