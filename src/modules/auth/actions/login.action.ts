import localApi from '@/api/localApi';
import type { LoginError, LoginSuccess } from '../interfaces/login-response.interface';

export const loginAction = async (
    username: string,
    password: string,
): Promise<LoginSuccess | LoginError> => {
    try {
        if (!username || !password) return { ok: false, error: 'username or password not valid' };

        const { data } = await localApi.post<LoginSuccess>('/auth/login', {
            username,
            password,
        });

        return {
            ok: true,
            user: data.user,
        };
    } catch (error) {
        return { ok: false, error: 'user not found' };
    }
};
