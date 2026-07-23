<template>
    <div class="py-20 flex items-center justify-center bg-gray-100">

        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

            <h2 class="text-3xl font-bold mb-6 text-center">
                Create Account
            </h2>

            <div v-if="serverError" class="bg-red-100 text-red-700 p-3 rounded mb-4">
                {{ serverError }}
            </div>

            <form @submit.prevent="register">

                <div class="mb-4">

                    <label>Name</label>

                    <input v-model="form.name" type="text" class="w-full border rounded px-3 py-2 mt-1" />

                    <p class="text-red-500 text-sm">
                        {{ errors.name }}
                    </p>

                </div>

                <div class="mb-4">

                    <label>Email</label>

                    <input v-model="form.email" type="email" class="w-full border rounded px-3 py-2 mt-1" />

                    <p class="text-red-500 text-sm">
                        {{ errors.email }}
                    </p>

                </div>

                <div class="mb-4">

                    <label>Password</label>

                    <input v-model="form.password" type="password" class="w-full border rounded px-3 py-2 mt-1" />

                    <p class="text-red-500 text-sm">
                        {{ errors.password }}
                    </p>

                </div>

                <div class="mb-6">

                    <label>Confirm Password</label>

                    <input v-model="form.password_confirmation" type="password"
                        class="w-full border rounded px-3 py-2 mt-1" />

                </div>

                <button :disabled="loading"
                    class="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 disabled:opacity-50">

                    <span v-if="loading">
                        Registering...
                    </span>

                    <span v-else>
                        Register
                    </span>

                </button>

            </form>

        </div>

    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const loading = ref(false);

const serverError = ref("");

const form = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const errors = reactive({
    name: "",
    email: "",
    password: "",
});

const validate = () => {

    errors.name = "";
    errors.email = "";
    errors.password = "";

    let valid = true;

    if (!form.name) {
        errors.name = "Name is required";
        valid = false;
    }

    if (!form.email) {
        errors.email = "Email is required";
        valid = false;
    }

    if (!form.password) {
        errors.password = "Password is required";
        valid = false;
    }

    if (form.password !== form.password_confirmation) {
        errors.password = "Passwords do not match";
        valid = false;
    }

    return valid;
};

const register = async () => {

    if (!validate()) return;

    loading.value = true;
    serverError.value = "";

    await axios.get("/sanctum/csrf-cookie");

    try {

        const res = await axios.post("/api/register", form);
        if(res){
            router.push("/login");
        }


    } catch (error) {

        if (error.response?.status === 422) {

            const validation = error.response.data.errors;

            Object.keys(validation).forEach(key => {
                errors[key] = validation[key][0];
            });

        } else {

            serverError.value =
                error.response?.data?.message ??
                "Something went wrong.";

        }

    } finally {

        loading.value = false;

    }

};
</script>
