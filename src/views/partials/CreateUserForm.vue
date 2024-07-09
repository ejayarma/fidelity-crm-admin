<script setup>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import { reactive, ref } from 'vue';



const userGroups = ref(['CSOE', 'CSOA']);
const branches = ref(['Dzorwulu', 'Kokomlemle', 'Ridge Tower', 'Tesano', 'Mamprobi', 'Madina Main']);

const userForm = reactive({
    username: '',
    name: '',
    usergroup: null,
    branch: null,
});

</script>

<template>
    <div class="border p-6 rounded space-y-4">
        <div class="flex flex-col gap-2">
            <label class="font-semibold" for="username">Username</label>
            <InputText class="!bg-primary-50" v-model="userForm.username" id="username" type="text"
                aria-labelledby="username" variant="filled" />
        </div>
        <div class="flex flex-col gap-2">
            <label class="font-semibold" for="name">Name</label>
            <InputText class="!bg-primary-50" v-model="userForm.name" id="name" type="text" aria-labelledby="name"
                variant="filled" />
        </div>
        <div class="flex flex-col gap-2">
            <label class="font-semibold" for="usergroup">User group</label>
            <Dropdown class="!bg-primary-50" v-model="userForm.usergroup" id="usergroup" aria-labelledby="usergroup"
                :options="userGroups" />
        </div>
        <div class="flex flex-col gap-2">
            <label class="font-semibold" for="branch">Branch</label>
            <Dropdown class="!bg-primary-50" v-model="userForm.branch" id="branch" aria-labelledby="branch"
                :options="branches" />
        </div>
    </div>
</template>
