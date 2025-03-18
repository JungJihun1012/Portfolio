import { REGISTER_USER } from "../type";

export const registerUser = (dataToSubmit: { email: string, password: string }) => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const response = await fetch(`http://localhost:8000/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Register failed');
            }
            dispatch({
                type: REGISTER_USER,
                payload: data
            });
            return data;
        } catch (error) {
            console.error("Error Debuger", error);
        }
    }
}