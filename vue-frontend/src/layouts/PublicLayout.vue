<template>
    <div>
        <Navbar/>
        
        <router-view></router-view>

        <Footer/>

    </div>
</template>

<script setup>
import Navbar from '@/components/frontend/Navbar.vue';
import Footer from '@/components/frontend/Footer.vue';

</script>

