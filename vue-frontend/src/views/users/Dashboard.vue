<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white shadow p-4 flex justify-between">
            <h1 class="font-bold">
                Dashboard
            </h1>

            <button
                @click="logoutUser"
                class="bg-red-500 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </nav>

        <div class="p-10">
            <h2 class="text-2xl">Welcome {{ auth.user?.name }}</h2>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const auth = useAuthStore();


const logoutUser = async () => {

    await auth.logout();

    router.push("/login");

};

</script>