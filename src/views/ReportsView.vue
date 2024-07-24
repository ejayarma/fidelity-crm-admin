<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Menu from 'primevue/menu';
import Tag from 'primevue/tag';
import CreateUserForm from './partials/CreateUserForm.vue';
import { useDialog } from 'primevue/usedialog';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import { formatDate } from '@/utils/DateUtils';
import _ from 'lodash';

const users = ref(
    Array(100).fill({
        name: 'Joseph Quansah',
        username: 'jquansah',
        user_group: 'CSOE',
        branch: '001',
        status: 'Active',
    })

);



const reportEntries = ref(
    Array(100).fill({
        request_id: '#FBLTRANSACT233',
        date: formatDate(new Date),
        category: 'Own Account',
        service: 'Own Account',
        csoe: 'kampah',
        customer: 'Kofi Dwamena',
        customer_id: '21000483839484',
        status: ['Success', 'Pending', 'Failed'][_.random(2)]
    })
);

const branches = ref(['Kokomlemle', 'Tesano', 'Ridge Tower', 'Kampah']);
const reportTypes = ref(['Top Transactions', 'Top Branches', 'Top Performers']);

const selectedUser = ref(null);
const selectedReportType = ref(null);
const selectedBranch = ref(null);
const fromDate = ref(new Date);
const toDate = ref(new Date);

function generateSeverity(status = 'info') {
    return {
        success: 'success',
        pending: 'warning',
        failed: 'danger',
    }[status];
}

</script>

<template>
    <div class="min-h-screen p-6">
        <div class="flex flex-col justify-between sm:flex-row">
            <h1 class="text-xl font-bold">Reports</h1>
            <div class="w-full p-1 pl-3 bg-white border-2 rounded-full sm:w-1/3 border-secondary/50">
                <div class="flex justify-between">
                    <input class="w-full font-light input placeholder:font-thin placeholder:text-sm focus:outline-none "
                        placeholder="Search Report..." type="text">
                    <span class="px-4 py-1 text-white rounded-full bg-primary">
                        <i class="pi pi-search"></i>
                    </span>
                </div>
            </div>
        </div>
        <Card class="mt-5 shadow-xl border-[.5px] p-1">
            <template #title>
                <div class="flex flex-col gap-4 text-xs font-normal xl:justify-between xl:gap-2 xl:flex-row">
                    <div class="inline-flex flex-col justify-between gap-2 sm:flex-row ">
                        <Dropdown v-model="selectedBranch" :options="branches" placeholder="Select Branch"
                            class="w-full h-10 p-0 m-0 !rounded-full" />
                        <Dropdown v-model="selectedUser" :options="users" option-label="name" placeholder="Select User"
                            class="w-full h-10 p-0 m-0 !rounded-full" />
                        <Dropdown v-model="selectedReportType" :options="reportTypes" placeholder="Report Type"
                            class="w-full h-10 p-0 m-0 !rounded-full" />
                    </div>

                    <div class="flex flex-col justify-between border rounded-md sm:flex-row">
                        <div class="inline-flex items-baseline w-full p-1">
                            <span class="w-8 mr-1 font-semibold">From</span>
                            <Calendar class="w-full h-10" date-format="d M. yy" :manual-input="false" v-model="fromDate"
                                show-button-bar="" show-icon iconDisplay="input" />
                        </div>
                        <div class="inline-flex items-baseline w-full p-1">
                            <span class="w-8 m-1 font-semibold">To</span>
                            <Calendar class="w-full h-10" date-format="d M. yy" :manual-input="false" v-model="toDate"
                                show-button-bar="" show-icon iconDisplay="input" />
                        </div>
                        <div class="inline-flex items-center justify-end w-full pb-1 pr-1 sm:pb-0">
                            <Button class="!py-2 ml-0 mt-4 sm:mt-0 sm:ml-1" raised label="" severity="contrast"
                                size="small" icon="pi pi-search" icon-pos="right" />
                        </div>
                    </div>
                </div>

                <div class="flex items-start justify-between mt-4 text-base font-normal">
                    <h2 class="text-sm">Displaying Range from <br class="inline md:hidden"> <span
                            class="font-semibold">{{ formatDate(fromDate) }}</span> to <span class="font-semibold">{{
                            formatDate(toDate) }}</span></h2>
                    <Button raised label="Export" size="small" icon="pi pi-arrow-right" icon-pos="right" />
                </div>
            </template>
            <template #content>


                <DataTable class="text-sm" :value="reportEntries" paginator :rows="10" tableStyle="min-width: 50rem">
                    <Column field="request_id" header="Request ID"></Column>
                    <Column field="date" header="Date">
                        <template #body="slotProps">
                            <i class="pi pi-calendar-plus"></i>
                            {{ (slotProps.data.date) }}
                        </template>
                    </Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="service" header="Service"></Column>
                    <Column field="csoe" header="CSOE"></Column>
                    <Column field="customer" header="Customer"></Column>
                    <Column field="customer_id" header="Customer ID"></Column>
                    <Column field="status" header="Status">
                        <template #body="slotProps">
                            <Tag class="w-full !bg-green-200 !text-green-600" v-if="slotProps.index % 5 == 0"
                                severity="success" value="Success"></Tag>
                            <Tag class="w-full bg-primary-100 !text-primary" v-else-if="slotProps.index % 3 == 0"
                                severity="warning" value="Pending"></Tag>
                            <Tag class="w-full" v-else-if="slotProps.index % 2 == 0" severity="danger" value="Failed">
                            </Tag>
                            <Tag class="w-full bg-primary-100 !text-primary" v-else severity="warning" value="Pending">
                            </Tag>
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </div>

</template>

<style scoped></style>
