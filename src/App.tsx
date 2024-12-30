import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtfolioPage from "./pages/ProtfolioPage";
import React from "react";

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtfolioPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;