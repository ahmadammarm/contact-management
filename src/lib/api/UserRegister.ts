import type { UserRegisterRequest } from '../../types/UserRegisterRequest';
export const UserRegister = async ({ username, name, password }: UserRegisterRequest) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username, name, password }),
    });
}
