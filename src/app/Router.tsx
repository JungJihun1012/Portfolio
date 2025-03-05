import { createBrowserRouter } from "react-router-dom";
import ProtfolioPage from "../pages/ui/ProtfolioPage";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <ProtfolioPage/>
    }
]);