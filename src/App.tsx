import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtfolioPage from "./pages/ProtfolioPage";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const getData = async () => {
    const user = await axios.get("http://localhost:3000/")

    console.log(user.data);
    
  }
  useEffect(() => {
    getData();
  }, []);
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtfolioPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;