import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import VueApexCharts from "vue3-apexcharts";
import DialogService from 'primevue/dialogservice';
import ConfirmationService from 'primevue/confirmationservice';



import 'primeicons/primeicons.css';


import App from './App.vue'
import router from './router'
import Lara from '@/presets/lara';      //import preset        

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(DialogService)
app.use(ConfirmationService)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
})

app.mount('#app')
