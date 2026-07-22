import { ref } from "vue";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export function useAuth() {

    const auth = useAuthStore();

    const loading = ref(false);
    const errors = ref({});


    const login = async (credentials) => {

        loading.value = true;
        errors.value = {};

        try {

            await axios.get("/sanctum/csrf-cookie");

            await axios.post("/login", credentials);

            await auth.getUser();

            return true;

        } catch (error) {

            if (error.response?.status === 422) {
                errors.value = error.response.data.errors;
            }

            if (error.response?.status === 401) {
                errors.value = {
                    email: ["Invalid credentials."]
                };
            }

            return false;

        } finally {
            loading.value = false;
        }
    };

    const logout = async () => {
        
        await auth.logout();
    };

    return {
        loading,
        errors,
        login,
        logout,
    };
}
