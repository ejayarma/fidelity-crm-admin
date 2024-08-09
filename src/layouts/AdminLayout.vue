<script setup>
import { RouterLink, RouterView } from 'vue-router';
import DynamicDialog from 'primevue/dynamicdialog';
import ConfirmDialog from 'primevue/confirmdialog';
import AdminHeader from '@/components/AdminHeader.vue';
import AdminSidebar from '@/components/AdminSidebar.vue';


</script>

<template>

    <AdminHeader />

    <main class="flex mt-16 justify-stretch">
        <AdminSidebar />

        <div class="w-full lg:w-5/6">
            <slot />
        </div>
    </main>
    <footer></footer>
</template>
