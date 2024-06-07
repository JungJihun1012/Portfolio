import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtfolioPage from "./pages/ProtfolioPage";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtfolioPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;