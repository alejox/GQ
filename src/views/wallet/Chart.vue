<template>
  <div class="pl-5">
    <apexchart
      height="300"
      type="area"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  props: ['currency'],
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: {
              show: false
          },
        },
        grid: {
            show: false
        },
        xaxis: {
          type: 'datetime',
          categories: [1656651600, 1657674706],
        },
        stroke: {
          curve: 'smooth',
          width: 1
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [
        {
          name: "Price",
          data: [0.5, 0.5],
        },
      ],
    };
  },
  created () {
    this.loading = true
    this.getGraphic(this.currency).then(() => {
      this.loading = false
      this.updateChart()
    })
  },
  methods: {
    ...mapActions('wallet', ['getGraphic']),
    updateChart() {
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: this.chart.times
          },
        },
      };
      
      this.series = [
        {
          data: this.chart.prices,
        },
      ];
    },
  },
  computed: {
      ...mapState('wallet', ['chart'])
  },
  watch: {
    comissions: function () {
      this.updateChart()
    }
  }
};
</script>