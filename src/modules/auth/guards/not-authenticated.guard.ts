import { AuthStore } from '@/stores';
import type { NavigationGuard } from 'vue-router';

export const notAuthenticatedGuard: NavigationGuard = () => {
    const authStore = AuthStore();

    if (!authStore.isAuthenticated) {
        return { name: 'login' };
    }
};
