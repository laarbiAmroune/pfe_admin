import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";

import Dash from "./dash/src/Dash";
import UserTable from "./dash/src/consultation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserTable/:id" element={<UserTable />} />
        <Route path="/Dash" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
