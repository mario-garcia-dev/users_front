import localApi from '@/api/localApi';
import type { User } from '@/modules/users/interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';

export const registerAction = async (user: User): Promise<boolean> => {
    try {
        const { username, email, fullname, password } = user;
        await localApi.post('/users', {
            id: uuidv4(),
            username,
            email,
            name: fullname,
            password,
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
