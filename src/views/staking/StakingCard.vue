<template>
    <div>
        <b-card>
            <div class="card-title">
                <div class="d-flex" v-if="staking.staking">
                    <b-avatar :src="staking.staking.asset.icon" v-if="staking.staking.asset" />
                    <h4 class="pt-2" style="padding-left:10px" v-if="staking.staking.asset">
                        {{ staking.staking.asset.name }}
                    </h4>
                </div>
                <div class="row mt-4">
                    <div class="col-6" v-if="staking.staking">
                        <span>Time</span>
                        <h6>{{ staking.staking.percentage }}%</h6>
                    </div>
                    <div class="col-6 text-right">
                        <span>Investment</span>
                        <h6>{{ staking.quantity }}</h6>
                        <h4>
                            {{ staking.earn }} earn
                        </h4>
                    </div>
                </div>
                <div class="mt-md-3 mt-lg-4 mt-1">
                    Duration
                </div>
                <div class="row mt-3" v-if="staking.staking">
                    <div class="col-3 mb-2" v-for="benefit in JSON.parse(staking.staking.days)" :key="benefit">
                        <b-button class="w-100" :size="size" :variant="benefit.name == staking.days ? 'primary' : 'secondary'">
                            {{ benefit.name }} Days
                        </b-button>
                    </div>
                </div>
                <div class="mt-3">
                    <b-progress :value="percentage" max="100" show-progress></b-progress>
                    <div class="row mt-1">
                        <div class="col-6">
                            39 days left
                            <!-- {{ calculateLeft(staking.end_date) }} days left -->
                        </div>
                        <div class="col-6 text-right">
                            End Date {{formatDate(staking.end_date)}}
                        </div>
                    </div>
                </div>
            </div>
        </b-card>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    props: {
        staking: {
            required: true
        },
        showBtn: {
            default: true
        },
        day: {
            default: null
        },
        size: {
            default: 'lg'
        }
    },
    data () {
        return {
            form: {
                staking_id: null,
                days: null
            },
            percentage: 0
        }
    },
    methods: {
        formatDate(date) {
            return moment(date).format('Y-MM-DD')
        },
        calculateLeft(date) {
            console.log(date, 'Error')
            let today = moment()
            date = moment(date)

            let left = date.diff(today, 'days')
            
            this.percentage = 100 - ((left * 100) / this.staking.days)
            this.percentage = this.percentage.toFixed(2)

            return left

        }
    },
    created () {
        this.form.staking_id = this.staking.id
    }
}
</script>