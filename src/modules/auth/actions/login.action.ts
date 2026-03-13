import localApi from '@/api/localApi';

export const loginAction = async (username: string, password: string): Promise<boolean> => {
    try {
        if (!username || !password) return false;

        await localApi.post('/auth/login', {
            username,
            password,
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
