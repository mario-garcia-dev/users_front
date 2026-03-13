import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/modules/users/interfaces/user.interface';
import { registerAction } from '../actions/register.action';
import { loginAction } from '../actions/login.action';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const AuthStore = defineStore('auth', () => {
    const errorMessage = ref<string | undefined>(undefined);
    const user = ref<User | undefined>(undefined);
    const authStatus = ref<AuthStatus>(AuthStatus.Checking);

    // REGISTER FUNCTION
    const registerUser = async (user: User): Promise<boolean> => {
        try {
            const { username, email, fullname, password } = user;
            if (!username || !email || !fullname || !password) {
                errorMessage.value = 'Please, fill all the fields';
                return false;
            }

            const ok = await registerAction(user);
            if (!ok) {
                // errorMessage.value = 'Username or password incorrect';
                return false;
            }

            errorMessage.value = undefined;
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    // LOGIN FUNCTION
    const loginUser = async (username: string, password: string): Promise<boolean> => {
        try {
            if (!username || !password) {
                errorMessage.value = 'Please, fill all the fields';
                return false;
            }

            const ok = await loginAction(username, password);
            if (!ok) {
                errorMessage.value = 'Username or password incorrect';
                authStatus.value = AuthStatus.Unauthenticated;
                return false;
            }

            errorMessage.value = undefined;
            authStatus.value = AuthStatus.Authenticated;
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    // LOGOUT FUNCTION
    const logOut = () => {
        authStatus.value = AuthStatus.Unauthenticated;
        user.value = undefined;
        return false;
    };

    const isAuthenticated = computed(() => {
        return authStatus.value === AuthStatus.Authenticated;
    });

    return {
        // funcions
        registerUser,
        loginUser,
        logOut,

        // getters
        isAuthenticated,

        // properties
        errorMessage,
    };
});
