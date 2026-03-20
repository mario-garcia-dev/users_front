<template>
    <div id="card-list" class="flex flex-wrap justify-between">
        <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
</template>

<script setup lang="ts">
import type { User } from '../interfaces/user.interface';
import UserCard from './UserCard.vue';

interface Props {
    users: User[];
}
defineProps<Props>();
</script>

<style scoped>
#card-list {
    border: 1px solid #dbdbdb;
    margin: 0 2rem 0 2rem;
    background-color: #fff;
}
</style>
