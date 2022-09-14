<template>
  <div>
    <div :id="'bars-staking-' + id"></div>
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
  props: ['id', 'currency'],
  created () {
    this.loading = true
    this.getGraphic(this.currency).then(() => {
      this.loading = false
      this.initTimelineChart()
    })
  },
  methods: {
    ...mapMutations(['SET_LOADING_BUTTON', 'SET_LOADING_DATA']),
    ...mapActions('wallet', ['getGraphic']),
    initTimelineChart () {
      const options = {
        chart: {
          type: 'line',
          height: 50,
          foreColor: '#8C87C2',
          fontFamily: 'Rubik, sans-serif',
          stacked: true,
          dropShadow: {
            enabled: false,
            enabledSeries: [0],
            top: -2,
            left: 2,
            blur: 5,
            opacity: 0.06
          },
          toolbar: { show: false }
        },
        colors: ['#ffd433'],
        stroke: {
          curve: 'smooth',
          width: 3
        },
        dataLabels: { enabled: false },
        series: [
          {
            name: '',
            data: this.chart[1]
          }
        ],
        markers: {
          size: 0,
          strokeColor: '#fff',
          strokeWidth: 3,
          strokeOpacity: 1,
          fillOpacity: 1,
          hover: { size: 6 }
        },
        xaxis: {
          labels: {
            show: false
          },
          categories: this.chart[0],
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: {
          show: false,
          labels: {
            offsetX: -10,
            offsetY: 0
          },
          tooltip: { enabled: false }
        },
        grid: {
          show: false,
          padding: {
            left: -5,
            right: 5
          }
        },
        tooltip: {
          show: false,
          x: { format: 'dd MMM yyyy' }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        }
      }

      const chart = new ApexCharts(
        document.querySelector('#bars-staking-' + this.id),
        options
      )

      chart.render()
    }
  },
  computed: {
    ...mapState(['abilities', 'role', 'userAuth']),
    ...mapState('wallet', ['chart'])
  }
}
</script>
