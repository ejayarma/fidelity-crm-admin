<script setup>
import { ref } from "vue";
import Menu from 'primevue/menu';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();

const menu = ref();
const items = ref([
  {
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-check-circle',
        command: () => {
          router.push('/');
        }
      },
      {
        label: 'Users',
        icon: 'pi pi-user',
        command: () => {
          router.push('/users');
        }
      },
      {
        label: 'Reports',
        icon: 'pi pi-clipboard',
        command: () => {
          router.push('/reports');
        }
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
        }
      },
    ]
  }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow-xl">
    <div class="container flex items-center justify-between px-4 sm:px-0 sm:mx-auto">
      <a href="/"><img src="@/assets/images/fidelity-logo.png" alt="Fidelity bank logo" class="h-12"></a>

      <button @click="toggle" class="flex flex-col mt-1">
        <div class="relative">
          <img src="@/assets/images/user-female.png" class="rounded-full size-10" alt="User profile image">
          <span class="absolute bottom-0 rounded-full shadow-2xl left-7 size-3 bg-primary"></span>
        </div>
        <span class="text-xs font-semibold mg:font-bold">Joana</span>
      </button>
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />

    </div>
  </header>
</template>

<style scoped></style>