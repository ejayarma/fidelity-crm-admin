<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Menu from 'primevue/menu';
import CreateUserForm from './partials/CreateUserForm.vue';
import { useDialog } from 'primevue/usedialog';

const dialog = useDialog();

const modalStyles = {
    width: '80vw',
};
const modalBreakPoints = {
    '575px': '85vw',
    '640px': '80vw',
    '960px': '65vw',
    '1199px': '65vw',
};

const users = ref(
    Array(100).fill({
        name: 'Joseph Quansah',
        username: 'jquansah',
        user_group: 'CSOE',
        branch: '001',
        status: 'Active',
    })
);

const menu = ref();

const items = ref([
    {
        // label: 'Options',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                command: () => dialog.open(CreateUserForm, {
                    props: {
                        header: 'Edit User',
                        draggable: false,
                        modal: true,
                        style: modalStyles,
                        breakpoints: modalBreakPoints,
                    }
                }),
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash'
            }
        ]
    }
]);

const toggleActionMenu = (event) => {
    menu.value.toggle(event);
};

function showCreateUserForm() {
    dialog.open(CreateUserForm, {
        props: {
            header: 'Create New User',
            draggable: false,
            modal: true,
            style: modalStyles,
            breakpoints: modalBreakPoints,
        }
    });
}

</script>

<template>
    <div class="min-h-screen p-6">
        <div class="flex flex-col justify-between sm:flex-row">
            <h1 class="text-xl font-bold">User Management</h1>
            <div class="w-full p-1 pl-3 bg-white border-2 rounded-full sm:w-1/3 border-secondary/50">
                <div class="flex justify-between">
                    <input class="w-full font-light input placeholder:font-thin placeholder:text-sm focus:outline-none "
                        placeholder="Search Users..." type="text">
                    <span class="px-4 py-1 text-white rounded-full bg-primary">
                        <i class="pi pi-search"></i>
                    </span>
                </div>
            </div>
        </div>
        <Card class="mt-5 shadow-xl border-[.5px]">
            <template #title>
                <div class="flex justify-between text-base font-normal">
                    <Button raised @click="showCreateUserForm" class="!rounded-full" label="Add User" size="small"
                        icon="pi pi-plus" icon-pos="right" />
                    <Button raised label="Export users" size="small" icon="pi pi-arrow-right" icon-pos="right" />
                </div>
            </template>
            <template #content>
                <DataTable :value="users" paginator :rows="10" tableStyle="min-width: 50rem">
                    <Column field="name" header="Name"></Column>
                    <Column field="username" header="Name"></Column>
                    <Column field="user_group" header="User group"></Column>
                    <Column field="branch" header="Branch"></Column>
                    <Column field="status" header="Status"></Column>
                    <Column header="Action">
                        <template #body="slotProps">
                            <Button label="Action" icon="pi pi-chevron-down" icon-pos="right" @click="toggleActionMenu"
                                aria-haspopup="true" aria-controls="overlay_menu" size="small" />
                            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </div>

</template>

<style scoped></style>
