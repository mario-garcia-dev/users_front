<template>
    <div id="card" class="p-3 text-sm break-all">
        <span>
            <p class="font-bold">Username:</p>
            <p class="mb-3">{{ user.username }}</p>
        </span>
        <span>
            <p class="font-bold">Name:</p>
            <p class="mb-3">{{ user.name }}</p>
        </span>
        <span>
            <p class="font-bold">Email:</p>
            <p class="mb-3">{{ user.email }}</p>
        </span>
    </div>
</template>

<script setup lang="ts">
import type { User } from '../interfaces/user.interface';

interface Props {
    user: User;
}
defineProps<Props>();
</script>

<style scoped>
#card {
    width: 30%;
    height: fit-content;
    margin: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    background-color: #fff;
}
</style>
