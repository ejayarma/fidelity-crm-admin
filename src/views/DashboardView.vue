<script setup>
import { ref } from 'vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

// background: #718EBF;

let options = {
  notation: "compact",
  compactDisplay: "short",
};
function formatCmpctNumber(number) {
  const usFormatter = Intl.NumberFormat("en-US", options);
  return usFormatter.format(number);
}


const topPerformers = ref([
  {
    title: 'Top CSOE',
    name: 'jnquansah',
    performance: '23,880k',
  },
  {
    title: 'Top Branch',
    name: 'Abeka Market',
    performance: '73,849k',
  },
  {
    title: 'Top Transaction',
    name: 'Fidelity Accounts Transfer',
    performance: '123,997k',
  },
]);

const topTransColChart = ref({
  options: {
    yaxis: {
      labels: {
        style: { colors: '#718EBF' },
        formatter: formatCmpctNumber
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    title: { text: screen.width >= 640 ? 'Top Transactions (Average Transactions per month)' : undefined },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 5,
        borderRadiusApplication: 'end',
        columnWidth: '30%',
      }
    },
    chart: {
      id: 'top-transactions-column-chart'
    },
    xaxis: {
      categories: ['Account Transfer', 'ACH', 'Check Deposit', 'Salary Payment', 'Same Amount', 'Fidelity Account', 'SI', 'fkanase'],
      labels: {
        style: { colors: '#AAAAAA' }
      },
    }
  },
  series: [
    {
      name: 'Transactions',
      data: [100000, 400000, 200000, 500000, 800000, 600000, 700000, 900000]
    }
  ],
});



const monthlyTransLineChart = ref({
  options: {
    yaxis: {
      labels: {
        style: { colors: '#718EBF' },
        formatter: formatCmpctNumber
      },
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    colors: ["#008080"],
    title: { text: screen.width >= 640 ? 'Monthly Transactions Graph' : undefined },
    chart: {
      id: 'monthly-transactions-line-chart'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: { colors: '#AAAAAA' }
      },
    }
  },
  series: [
    {
      name: 'Transactions',
      data: [30000, 40000, 45000, 50000, 49000, 60000, 70000, 91000]
    }
  ],
});


const topBranchTransColChart = ref({
  options: {
    yaxis: {
      labels: {
        style: { colors: '#718EBF' },
        formatter: formatCmpctNumber
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    title: { text: screen.width >= 640 ? 'Top Branches (Average Transactions per month)' : undefined },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 5,
        borderRadiusApplication: 'end',
        columnWidth: '30%',
      }
    },
    chart: {
      id: 'top-transactions-column-chart'
    },
    xaxis: {
      categories: ['Dzorwulu', 'Kokomlemle', 'Ridge Tower', 'Tesano', 'Mamprobi', 'Madina Main'],
      labels: {
        style: { colors: '#AAAAAA' },
      },
    }
  },
  series: [
    {
      name: 'Transactions',
      data: [600000, 700000, 900000, 300000, 230000, 670000]
    }
  ],
});

const topCsoeTransColChart = ref({
  options: {
    yaxis: {
      labels: {
        style: { colors: '#718EBF' }
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    title: { text: screen.width >= 640 ? 'Top CSOEs (Average Transactions per month)' : undefined },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 5,
        borderRadiusApplication: 'end',
        columnWidth: '50%',
      }
    },
    chart: {
      id: 'top-transactions-column-chart'
    },
    xaxis: {
      categories: ['jnquansah', 'ACH', 'kampah', 'paboadu', 'eaasare', 'kbobiatey', 'fkanase'],
      labels: {
        style: { colors: '#AAAAAA' }
      },
    }
  },
  series: [
    {
      name: 'Transactions',
      data: [100000, 400000, 200000, 500000, 800000, 600000, 700000]
    }
  ],
});


</script>

<template>

  <AdminLayout>
    <div class="p-4">
      <h1 class="text-xl font-semibold">Dashboard</h1>

      <div class="grid grid-cols-1 gap-2 mt-6 lg:grid-cols-2">
        <div>
          <h2 class="lg:h-[10%] tracking-wide text-lg ">Today's Transactions</h2>
          <div class="lg:h-[90%] grid grid-cols-1 sm:grid-cols-2 gap-2">

            <div class="p-4 border rounded-lg sm:p-8">
              <div class="flex items-center justify-between">
                <div>
                  <h6 class="text-surface-500">Successful</h6>
                  <span class="text-xl">2556</span>
                </div>
                <i class="p-1 text-xs text-white bg-green-600 rounded-full pi pi-check"></i>
              </div>
            </div>


            <div class="p-4 border rounded-lg sm:p-8">
              <div class="flex items-center justify-between">
                <div>
                  <h6 class="text-surface-500">Pending</h6>
                  <span class="text-xl">100</span>
                </div>
                <i class="p-1 text-xs text-white rounded-full pi pi-hourglass bg-primary"></i>
              </div>
            </div>

            <div class="p-4 border rounded-lg sm:p-8">
              <div class="flex items-center justify-between">
                <div>
                  <h6 class="text-surface-500">Failed</h6>
                  <span class="text-xl">14</span>
                </div>
                <i class="p-1 text-xs text-white bg-red-600 rounded-full pi pi-times"></i>
              </div>
            </div>


            <div class="p-4 border rounded-lg sm:p-8">
              <div class="flex items-center justify-between">
                <div>
                  <h6 class="text-surface-500">In Queue</h6>
                  <span class="text-xl">347</span>
                </div>
                <i class="p-1 text-xs text-white bg-blue-600 rounded-full pi pi-users"></i>
              </div>
            </div>





          </div>
        </div>

        <div>
          <h2 class="lg:h-[10%] tracking-wide text-lg">Overall Top Performers</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-stretch lg:h-[90%]">
            <div v-for="item in topPerformers" :key="index"
              class="flex flex-col items-center justify-center py-4 text-center rounded-lg bg-primary-100">
              <div class="text-lg">{{ item.title }}</div>
              <div class="mt-3 text-sm font-semibold">{{ item.name }}</div>
              <div class="my-4 text-2xl font-bold tracking-wider">{{ item.performance }}</div>
              <div class="text-sm">Transactions</div>
            </div>
          </div>
        </div>


      </div>

      <div class="p-3 mt-3 border rounded-lg">
        <h2 class="text-sm font-semibold text-center sm:hidden">Top Transactions (Average Transactions per month)</h2>
        <apexchart height="500" type="bar" :options="topTransColChart.options" :series="topTransColChart.series">
        </apexchart>
      </div>

      <div class="p-3 mt-3 border rounded-lg">
        <h2 class="text-sm font-semibold text-center sm:hidden">Monthly Transactions Graph</h2>
        <apexchart height="500" type="line" :options="monthlyTransLineChart.options"
          :series="monthlyTransLineChart.series">
        </apexchart>

      </div>

      <div class="flex flex-col gap-3 mt-3 xl:flex-row">
        <div class="w-full p-3 border rounded-lg xl:w-1/2">
          <h2 class="text-sm font-semibold text-center sm:hidden">Top Branches (Average Transactions per month)</h2>
          <apexchart height="500" type="bar" :options="topBranchTransColChart.options"
            :series="topBranchTransColChart.series">
          </apexchart>
        </div>

        <div class="w-full p-3 border rounded-lg xl:w-1/2">
          <h2 class="text-sm font-semibold text-center sm:hidden">Top CSOEs (Average Transactions per month)</h2>
          <apexchart height="500" type="bar" :options="topCsoeTransColChart.options"
            :series="topCsoeTransColChart.series">
          </apexchart>
        </div>

      </div>



    </div>

  </AdminLayout>

</template>
