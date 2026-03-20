import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '../interfaces/user.interface';
import { getUsersAction } from '../actions/get-users.action';

export const UsersStore = defineStore('users', () => {
    const users = ref<User[]>([]);
    const activeUser = ref<User | undefined>(undefined);

    const getUsers = async () => {
        const usersList = await getUsersAction();
        if (usersList.length === 0) return [];
        users.value = usersList;
    };

    return {
        // functions
        getUsers,

        // properties
        users,
        activeUser,
    };
});
