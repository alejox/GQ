<template>
  <div class="pl-5">
    <apexchart
      height="300"
      :type="type"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  props: {
    type: {
      default: "area"
    }
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: {
              show: false
          },
        },
        tooltip:{
          enabled: false
        },
        grid: {
            show: false
        },
        colors: ['#13DC38'],
        yaxis: {
            show: false
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        toolbar: {
            show: false
        },
        dataLabels: {
          formatter: function (val, opts) {
              return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  created () {
    this.updateChart()
  },
  methods: {
    updateChart() {
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: this.chart.dates
          },
        },
      };
      
      this.series = [
        {
          data: this.chart.totals,
        },
      ];
    },
  },
  computed: {
    ...mapState('staking', ['chart'])
  },
  watch: {
    chart: function () {
      this.updateChart()
    }
  }
};
</script>