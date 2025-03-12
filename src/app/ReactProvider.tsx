import {RouterProvider} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles.ts';
import { Router } from './Router.tsx';
import { theme } from './theme/index.ts';

export function ReactProvider() {
    const queryClient = new QueryClient;
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles/>
                    <RouterProvider router={Router}/>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    )
}