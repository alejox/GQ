<template>
  <div>
    <b-card class="w-100">
        <div class="text-right">
                <h2>My wallets</h2>
            </div>
        <apexchart
      height="250"
      type="pie"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    </b-card>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data: function() {
    return {
        balances: [],
        names: [],
      chartOptions: {
        chart: {
          id: "vuechart-wallets",
          toolbar: {
              show: false
          },
        },
        toolbar: {
            show: false
        },
        labels: ['', ''],
        dataLabels: {
          formatter: function (val, opts) {
              return val.toFixed(2)
          },
        }
      },
      series: [0, 0],
    };
  },
  created () {
    this.getData()
  },
  methods: {
    ...mapActions('wallet', ['getWallets']),
    getData () {
        this.loading = true
        this.getWallets().then(() => {
            this.filterWallet()
        })
    },
    filterWallet() {
        this.wallets.forEach(element => {
            this.balances.push(element.balance_usd)
            this.names.push(element.asset.name + ' | ' + element.balance_usd)
        });
        this.loading = false
        this.updateChart()
    },
    updateChart() {
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          labels: this.names,
        },
      };
      
      this.series = this.balances;
    },
  },
  computed: {
    ...mapState('wallet', ['wallets'])
  },
  watch: {
    chart: function () {
      this.updateChart()
    }
  }
};
</script>