<template>

<div class="py-20 flex items-center justify-center bg-gray-100">

    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow">

        <h1 class="text-3xl font-bold mb-6 text-center">
            Login
        </h1>

        <form @submit.prevent="submit">

            <div class="mb-4">

                <label>Email</label>

                <input
                    v-model="form.email"
                    type="email"
                    class="w-full border rounded p-3 mt-1"
                />

                <p
                    v-if="errors.email"
                    class="text-red-500 text-sm mt-1"
                >
                    {{ errors.email[0] }}
                </p>

            </div>

            <div class="mb-4">

                <label>Password</label>

                <input
                    v-model="form.password"
                    type="password"
                    class="w-full border rounded p-3 mt-1"
                />

                <p
                    v-if="errors.password"
                    class="text-red-500 text-sm mt-1"
                >
                    {{ errors.password[0] }}
                </p>

            </div>

            <button
                :disabled="loading"
                class="w-full bg-blue-600 text-white p-3 rounded disabled:bg-gray-400"
            >

                <span v-if="loading">
                    Logging in...
                </span>

                <span v-else>
                    Login
                </span>

            </button>

        </form>

    </div>

</div>

</template>

<script setup>

import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const router = useRouter();

const {
    login,
    loading,
    errors
} = useAuth();

const form = reactive({

    email: "",
    password: ""

});

const submit = async () => {

    if (!form.email || !form.password) {

        errors.value = {};

        if (!form.email)
            errors.value.email = ["Email required"];

        if (!form.password)
            errors.value.password = ["Password required"];

        return;
    }

    const success = await login(form);

    if (success) {
        router.push("/dashboard");
    }

};

</script>