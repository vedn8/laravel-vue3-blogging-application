<template>
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-16">

                <!-- Logo -->
                <router-link to="/" class="text-2xl font-bold text-indigo-600">
                    Funda Blog
                </router-link>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <router-link to="/" class="text-gray-700 hover:text-indigo-600 transition">Home</router-link>
                    <router-link to="/blogs" class="text-gray-700 hover:text-indigo-600 transition">Blogs</router-link>
                    <router-link to="/about" class="text-gray-700 hover:text-indigo-600 transition">About</router-link>
                    <router-link to="/contact" class="text-gray-700 hover:text-indigo-600 transition">Contact</router-link>
                </div>

                <!-- Buttons -->
                <div class="hidden md:flex items-center gap-3">
                    <div v-if="!auth.isLoggedIn" class="flex gap-3">
                        <router-link to="/login" class="px-5 py-2 rounded-lg text-indigo-600 border border-indigo-600 hover:bg-indigo-50">
                            Login
                        </router-link>
                        <router-link to="/register" class="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                            Register
                        </router-link>
                    </div>
                    <div v-else class="flex items-center gap-3">
                        <div>
                            {{ auth?.user?.name }}
                        </div>
                        <button 
                            class="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700" 
                            @click="logoutUser"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <!-- Mobile Button -->
                <button class="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

            </div>
        </div>
    </nav>

</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth"

const auth = useAuthStore();
const router = useRouter();

const logoutUser = async () => {

    await auth.logout();
    router.push("/login");
}
</script>
