import { notAuthenticatedGuard } from '@/modules/auth/guards/not-authenticated.guard';
import { authRoutes } from '@/modules/auth/routes/auth.routes';
import UsersLayout from '@/modules/users/layouts/UsersLayout.vue';
import { AuthStore } from '@/stores';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: { name: 'users' },
            beforeEnter: notAuthenticatedGuard,
            component: UsersLayout,
            children: [
                {
                    path: 'users',
                    name: 'users',
                    component: () => import('@/modules/users/pages/UsersPage.vue'),
                },
            ],
        },

        // Auth Routes
        authRoutes,
    ],
});

router.afterEach(() => {
    const authStore = AuthStore();
    authStore.errorMessage = undefined;
});

export default router;
