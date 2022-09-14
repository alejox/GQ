<template>
    <b-card title="Last signals" no-body class="h-100">
        <div class="pt-3 pl-3">
            <h3 class="text-white">
                Active Stakings
            </h3>
        </div>
        <div v-if="stakings.length > 0">
            <Carousel :itemsToShow="quantityResponsive" :wrapAround="true">
                <Slide v-for="staking in stakings" :key="staking.id">
                    <div class="carousel__item w-100 p-4">
                        <StakingCard :staking="staking" :size="'sm'"/>
                    </div>
                </Slide>
            </Carousel>
        </div>
        <div v-else class="p-4">
            <b-card>
                <div class="card-title">
                    <div class="d-flex">
                        <b-avatar />
                        <h4 class="pt-2" style="padding-left:10px">
                          Create first staking
                        </h4>
                    </div>
                    <div class="mt-md-3 mt-lg-4 mt-1">
                        Duration
                    </div>
                    <div class="row mt-3">
                        <div class="col-3 mb-2">
                            <b-button class="w-100" size="sm" variant="secondary">
                                ⠀
                            </b-button>
                        </div>
                        <div class="col-3 mb-2">
                            <b-button class="w-100" size="sm" variant="secondary">
                                ⠀
                            </b-button>
                        </div>
                        <div class="col-3 mb-2">
                            <b-button class="w-100" size="sm" variant="secondary">
                                ⠀
                            </b-button>
                        </div>
                        <div class="col-3 mb-2">
                            <b-button class="w-100" size="sm" variant="secondary">
                                ⠀
                            </b-button>
                        </div>
                    </div>
                    <div class="mt-3 mb-4">
                        <b-progress value="0" max="100" show-progress></b-progress>
                        <div class="row mt-1">
                            <div class="col-6">
                                <!-- {{ calculateLeft(staking.end_date) }} days left -->
                            </div>
                        </div>
                    </div>
                </div>
            </b-card>
        </div>
    </b-card>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import CardSignal from '../signal/CardSignal.vue'
import 'vue3-carousel/dist/carousel.css';
import StakingCard from '../staking/StakingCard.vue'
import moment from 'moment'
export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    CardSignal,
    StakingCard
  },
  data () {
    return {
        loading: false,
        windowWidth: window.innerWidth,
        quantityResponsive: 1
    }
  },
  created () {
    this.getData()
  },
  methods: {
        ...mapActions('staking', ['getSubStakings']),
        getData() {
            this.loading = true
            this.getSubStakings().then(() => {
                this.loading = false
            })
        },
        formatDate(date) {
            return moment(date).format('Y-MM-DD')
        },
        calculateLeft(date) {
            console.log(date)
            let today = moment()
            date = moment(date)

            let left = date.diff(today, 'days')
            
            this.percentage = 100 - ((left * 100) / this.staking.days)
            this.percentage = this.percentage.toFixed(2)

            return left

        }
    },
    computed: {
        ...mapState('staking', ['stakings']),
        ...mapState('auth', ['user'])
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }
    },
    watch: {
        windowWidth: function () {
            if(this.windowWidth > 700 && this.windowWidth <= 1100) {
                this.quantityResponsive = 2
            } else if(this.windowWidth <= 700) {
                this.quantityResponsive = 1
            }
        }
    }

})

</script>