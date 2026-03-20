<template>
    <h1 class="text-center mt-5 mb-2 font-bold text-2xl">Users</h1>
    <UsersList :users="usersStore.users" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import UsersList from '../components/UsersList.vue';
import { UsersStore } from '../store/user.store';

const usersStore = UsersStore();

onMounted(() => {
    usersStore.getUsers();
});
</script>
