import { LOGIN_USER } from "../type";

export const loginUser = (dataToSubmit: { email: string, password: string }) => {
    return async (dispatch: (arg0: { type: string, payload: any }) => void) => {
        try {
            const response = await fetch(`http://localhost:8000/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application'
                },
                body: JSON.stringify(dataToSubmit),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            dispatch({
                type: LOGIN_USER,
                payload: data,
            });
        } catch (error) {
            console.error('Login deburging Failed', error);
        };
    };
};
