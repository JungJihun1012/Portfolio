import { createBrowserRouter } from "react-router-dom";
import ProtfolioPage from "../pages/ProtfolioPage";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <ProtfolioPage/>
    }
]);