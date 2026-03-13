import { AuthStore } from '@/stores';
import type { NavigationGuard, RouteLocationNormalized } from 'vue-router';

export const isAuthenticatedGuard: NavigationGuard = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
) => {
    const authStore = AuthStore();
    if (authStore.isAuthenticated) {
        return { name: 'users' };
    }
};
