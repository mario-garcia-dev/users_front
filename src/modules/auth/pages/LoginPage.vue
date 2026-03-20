<template>
    <h2 class="text-center mb-3">Login</h2>
    <label class="block font-semibold">Username</label>
    <input
        v-model="loginForm.username"
        type="text"
        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
    />
    <label class="block mt-3 font-semibold">Password</label>
    <input
        v-model="loginForm.password"
        type="password"
        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
    />
    <div class="flex justify-between items-center">
        <button
            type="submit"
            @click="onLogin"
            class="mt-4 mr-2 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 transition-all cursor-pointer"
        >
            Login
        </button>
        <span class="text-sm mt-4 ml-2">
            <p>Don't have an account?</p>
            <router-link
                :to="{ name: 'register' }"
                class="text-purple-500 underline hover:text-purple-400 transition-all"
                >Register</router-link
            >
        </span>
    </div>
    <div v-show="authStore.errorMessage !== null">
        <p class="text-center text-xs text-red-600 mt-3">{{ authStore.errorMessage }}</p>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { AuthStore } from '@/stores/index';
import router from '@/router';

const authStore = AuthStore();

const loginForm = reactive({
    username: '',
    password: '',
});

const onLogin = async () => {
    const ok = await authStore.loginUser(loginForm.username, loginForm.password);

    if (!ok) return;

    router.replace({ name: 'home' });
};
</script>
