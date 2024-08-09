<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <aside class="hidden w-1/6 p-4 bg-surface-900 text-surface-300 lg:block">

        <div class="flex flex-col items-center justify-center gap-1 mx-auto">
            <img class="object-cover border border-gray-300 rounded-full size-20 " src="@/assets/images/user-female.png"
                alt="">
            <p class="text-sm">jnquansah</p>
        </div>

        <div class="flex flex-col gap-2 mt-10">
            <RouterLink active-class="bg-surface-600"
                class="flex items-center gap-3 px-3 py-2 transition duration-300 rounded hover:bg-surface-500" to="/">
                <i class="pi pi-check-circle"></i>
                <span>Dashboard</span>
            </RouterLink>
            <RouterLink active-class="bg-surface-600"
                class="flex items-center gap-3 px-3 py-2 transition duration-300 rounded hover:bg-surface-500"
                to="/users">
                <i class="pi pi-user"></i>
                <span>User Management</span>
            </RouterLink>
            <RouterLink active-class="bg-surface-600"
                class="flex items-center gap-3 px-3 py-2 transition duration-300 rounded hover:bg-surface-500"
                to="/reports">
                <i class="pi pi-clipboard"></i>
                <span>Reports</span>
            </RouterLink>
            <RouterLink class="flex items-center gap-3 px-3 py-2 transition duration-300 rounded hover:bg-surface-500"
                to="#">
                <i class="pi pi-sign-out"></i>
                <span>Logout</span>
            </RouterLink>
        </div>

    </aside>
</template>