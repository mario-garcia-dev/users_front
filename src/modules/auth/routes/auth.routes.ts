import type { RouteRecordRaw } from 'vue-router';
import AuthLayout from '../layouts/AuthLayout.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import { isAuthenticatedGuard } from '../guards/is-authenticated.guard';

export const authRoutes: RouteRecordRaw = {
    path: '/auth',
    name: 'auth',
    beforeEnter: isAuthenticatedGuard,
    redirect: { name: 'login' },
    component: AuthLayout,
    children: [
        {
            path: 'login',
            name: 'login',
            component: LoginPage,
        },
        {
            path: 'register',
            name: 'register',
            component: RegisterPage,
        },
    ],
};
