<template>
    <h2 class="text-center mb-3">Login</h2>
    <label class="block font-semibold">Username</label>
    <input
        type="text"
        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
    />
    <label class="block mt-3 font-semibold">Password</label>
    <input
        type="password"
        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
    />
    <div class="flex justify-between items-baseline">
        <button
            type="submit"
            @click="$router.push({ name: 'users' })"
            class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
        >
            Login
        </button>
        <span class="text-sm">
            <p>Don't have an account?</p>
            <router-link
                :to="{ name: 'register' }"
                class="text-purple-500 underline hover:text-purple-400"
                >Register</router-link
            >
        </span>
    </div>
</template>

<script setup lang="ts"></script>
