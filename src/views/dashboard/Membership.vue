<template>
    <b-card title="Last signals" no-body class="h-100">
        <div class="pt-3 pl-3">
            <h3 class="text-white">
                Last signals
            </h3>
        </div>
        <Carousel :itemsToShow="quantityResponsive" :wrapAround="true">
            <Slide v-for="signal in signals" :key="signal.id">
                <div class="carousel__item w-100 p-4">
                    <CardSignal :signal="signal"/>
                </div>
            </Slide>
        </Carousel>
    </b-card>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import CardSignal from '../signal/CardSignal.vue'
import 'vue3-carousel/dist/carousel.css';
export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    CardSignal
  },
  data () {
    return {
        loading: false,
        quantityResponsive: 3,
        windowWidth: window.innerWidth
    }
  },
  created () {
    this.getData()
  },
  methods: {
        ...mapActions('signal', ['getSignals']),
        getData() {
            this.loading = true
            this.getSignals().then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('signal', ['signals']),
        ...mapState('auth', ['user'])
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
            if(this.windowWidth > 700 && this.windowWidth <= 1100) {
                this.quantityResponsive = 2
            } else if(this.windowWidth <= 700) {
                this.quantityResponsive = 1
            }
        }
    },
    watch: {
        windowWidth: function () {
            console.log("WITH", this.windowWidth)
            if(this.windowWidth > 700 && this.windowWidth <= 1100) {
                this.quantityResponsive = 2
            } else if(this.windowWidth <= 700) {
                this.quantityResponsive = 1
            }
        }
    }

})

</script>