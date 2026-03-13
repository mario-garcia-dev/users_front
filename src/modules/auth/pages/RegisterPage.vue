<template>
    <h2 class="text-center mb-3">Register</h2>
    <form @submit.prevent="onRegister">
        <label class="block font-semibold">Username</label>
        <input
            v-model="registerForm.username"
            type="text"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
        <label class="block mt-3 font-semibold">Email</label>
        <input
            v-model="registerForm.email"
            type="email"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
        <label class="block mt-3 font-semibold">Full name</label>
        <input
            v-model="registerForm.fullname"
            type="text"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
        <label class="block mt-3 font-semibold">Password</label>
        <input
            v-model="registerForm.password"
            type="password"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />

        <div class="flex justify-between items-center">
            <button
                type="submit"
                class="mt-4 mr-2 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 transition-all cursor-pointer"
            >
                Register
            </button>
            <span class="text-sm mt-4 ml-2">
                <p>Already have an account?</p>
                <router-link
                    :to="{ name: 'login' }"
                    class="text-purple-500 underline hover:text-purple-400 transition-all"
                    >Login</router-link
                >
            </span>
        </div>
    </form>
    <div>
        <p class="text-center text-xs text-red-600 mt-3">{{ authStore.errorMessage }}</p>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { AuthStore } from '@/stores/index';
import router from '@/router';

const authStore = AuthStore();

const registerForm = reactive({
    username: '',
    email: '',
    fullname: '',
    password: '',
});

const onRegister = async () => {
    const ok = await authStore.registerUser({
        username: registerForm.username,
        email: registerForm.email,
        fullname: registerForm.fullname,
        password: registerForm.password,
    });

    if (!ok) return;

    router.push({ name: 'login' });
};
</script>
