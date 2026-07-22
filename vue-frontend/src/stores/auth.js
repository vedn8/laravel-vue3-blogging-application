import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useAuthStore = defineStore('auth', () => {

    const user = ref(null);
    const isLoggedIn = ref(false);
    const initialized = ref(false);
    const loading = ref(false);

    async function getUser() {
        
        if(loading.value) return;

        loading.value = true;

        try {
            const { data } = await axios.get('/api/user');

            user.value = data;
            isLoggedIn.value = true;
        } catch (error) {
            user.value = null;
            isLoggedIn.value = false
        } finally {
            initialized.value = true;
            loading.value = false;
        }
    }

    async function logout() {
        await axios.post('/logout');

        user.value = null;
        isLoggedIn.value = false
    }

    function hasRole(role) { 
        return user.value?.role === role;
    }

    return {
        user,
        isLoggedIn,
        initialized,
        getUser,
        logout,
        hasRole,
    }
})
