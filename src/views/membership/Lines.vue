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
  props: ['id'],
  data () {
    return {
      loading: false
    }
  },
  props: ['money', 'months', 'id', 'currency', 'chart'],
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
    series: [{
        name: 'Investment',
        data: this.chart
    }],
    colors: ['#ffd433'],
    chart: {
      height: 150,
      type: 'area',
      toolbar: {
          show: false
      },
      dataLabels: {
          enabled: false
      },
      fill: {
      },
      foreColor: '#8C87C2',
    },
    grid: {
      xaxis: {
        lines: {
            show: false
        }
      },
      yaxis: {
        lines: {
            show: false
        }
      }
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
    tooltip: {
        enabled: false
    },
    xaxis: {
        labels: {
            show: false
        },
        show: false,
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T01:45:00.000Z", "2018-09-19T03:30:00.000Z"]
    },
    yaxis: {
          show: false,
        
    }
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