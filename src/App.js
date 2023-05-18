import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";

import Dash from "./dash/src/Dash"

function App() {
  return (

      <BrowserRouter>
      <Routes>

      <Route path="/Login" element={<Login />} />
      <Route path="/Dash" element={<Dash/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
