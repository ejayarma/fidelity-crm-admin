<script setup>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
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
    <form class="p-6 space-y-4 border rounded">
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
        <div class="flex justify-end">
            <Button type="submit" raised label="Submit" size="small" icon="pi pi-arrow-right" icon-pos="right" />
        </div>
    </form>
</template>
