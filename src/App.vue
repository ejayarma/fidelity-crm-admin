<script setup>
import { RouterView } from 'vue-router';
import DynamicDialog from 'primevue/dynamicdialog';
import ConfirmDialog from 'primevue/confirmdialog';


</script>

<template>
  <DynamicDialog />
  <ConfirmDialog></ConfirmDialog>

  <RouterView />
</template>
