<template>
    <!-- component -->
    <div
        class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
    >
        <div class="relative py-3 sm:w-96 mx-auto text-center">
            <!-- <span class="text-2xl font-light">Login or create your account</span> -->
            <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                <div class="h-2 bg-purple-400 rounded-t-md"></div>
                <div class="px-8 py-6">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>
