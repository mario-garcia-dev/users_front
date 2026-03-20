import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/modules/users/interfaces/user.interface';
import { registerAction } from '../actions/register.action';
import { loginAction } from '../actions/login.action';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { UsersStore } from '@/modules/users/store/user.store';

export const AuthStore = defineStore('auth', () => {
    const errorMessage = ref<string | undefined>(undefined);
    // const authStatus = ref<AuthStatus>(AuthStatus.Authenticated);
    const authStatus = ref<AuthStatus>(AuthStatus.Checking);

    const usersStore = UsersStore();

    //* FUNCTIONS
    // REGISTER FUNCTION
    const registerUser = async (user: User): Promise<boolean> => {
        try {
            const { username, email, name, password } = user;
            if (!username || !email || !name || !password) {
                errorMessage.value = 'Please, fill all the fields';
                return false;
            }

            const ok = await registerAction(user);
            if (!ok) {
                return false;
            }

            errorMessage.value = undefined;
            return true;
        } catch (error) {
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

            const loginData = await loginAction(username, password);
            if (!loginData.ok) {
                usersStore.activeUser = undefined;
                errorMessage.value = 'Username or password incorrect';
                authStatus.value = AuthStatus.Unauthenticated;
                return false;
            }

            usersStore.activeUser = loginData.user;
            errorMessage.value = undefined;
            authStatus.value = AuthStatus.Authenticated;
            return true;
        } catch (error) {
            return false;
        }
    };

    // LOGOUT FUNCTION
    const logOut = () => {
        authStatus.value = AuthStatus.Unauthenticated;
        usersStore.activeUser = undefined;
        return false;
    };

    //* GETTERS
    const isAuthenticated = computed(() => {
        return authStatus.value === AuthStatus.Authenticated;
    });

    // TODO: isAdmin getter

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
