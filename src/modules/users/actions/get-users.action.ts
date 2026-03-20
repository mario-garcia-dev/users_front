import localApi from '@/api/localApi';
import type { User } from '../interfaces/user.interface';

export const getUsersAction = async (): Promise<User[]> => {
    const { data } = await localApi.get<User[]>('/users');
    return data;
};
