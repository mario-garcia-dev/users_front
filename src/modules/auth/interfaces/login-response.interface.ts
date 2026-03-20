import type { User } from '@/modules/users/interfaces/user.interface';

export interface LoginSuccess {
    ok: true;
    user: User;
}

export interface LoginError {
    ok: false;
    error: string;
}
