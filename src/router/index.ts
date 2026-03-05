import { authRoutes } from '@/modules/auth/routes/auth.routes';
import UsersLayout from '@/modules/users/layouts/UsersLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'users',
            component: UsersLayout,
        },

        // Auth Routes
        authRoutes,
    ],
});

export default router;
