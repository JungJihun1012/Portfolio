import { createBrowserRouter } from "react-router-dom";
import ProtfolioPage from "../pages/ui/ProtfolioPage";
import AboutPage from "../pages/ui/AboutPage";
import LoginPage from "../pages/ui/LoginPage";
import { RegisterPage } from "../pages/ui/RegsiterPage";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <ProtfolioPage/>
    },
    {
        path: '/about',
        element: <AboutPage src={""} alt={""} />
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    }
]);