import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProtfolioPage from "./pages/ProtfolioPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ThemeProvider } from 'styled-components';
import { Theme } from './style/theme/Theme.tsx';
import { GlobalStyles } from './style/GlobalStyles.ts';

export function Provider() {
    const queryClient = new QueryClient;
    const router = createBrowserRouter([
        {
            path: '/',
            element: <ProtfolioPage/>
        }
    ]);
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={Theme}>
                    <GlobalStyles/>
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    )
}