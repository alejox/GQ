<template>
  <div>
    <div :id="'linear-' + id"></div>
  </div>
</template>

<script>
import ApexCharts from 'apexcharts'
import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  data () {
    return {
      loading: false
    }
  },
  props: ['money', 'months', 'id', 'currency'],
  mounted () {
    this.initTimelineChart()
  },
  created () {
    this.loading = true
  },
  methods: {
    ...mapMutations(['SET_LOADING_BUTTON', 'SET_LOADING_DATA']),
    ...mapActions('wallet', ['getGraphic']),
    initTimelineChart () {
      var options = {
          series: [
            {
                name: 'Investment',
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ],
        colors: ['#ffd433'],
        chart: {
          height: 300,
          type: 'area',
           toolbar: {
            show: false
          },
          foreColor: '#8C87C2',
        },
        toolbar: {
            show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        grid: {
          show: false,
          padding: {
            left: -5,
            right: 5
          }
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };
      var chart = new ApexCharts(document.querySelector('#linear-' + this.id),
          options
      );
      chart.render();
    }
  },
  computed: {
    ...mapState(['abilities', 'role', 'userAuth']),
    ...mapState('wallet', ['chart'])
  }
}
</script>
<style>
    .apexcharts-legend-text{
        color: white !important;
    }
    .apexcharts-legend-series{
        margin-top: 10px !important;
    }
</style>