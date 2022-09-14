<template>
    <div class="row">
        <div class="col-12 col-md-10 offset-md-1 text-left margin-bottom mb-5">
            <h3 class="mb-3 text-white">
                Select plan
            </h3>
            <div class="row">
                <div class="col-12 col-md-6 mb-3" v-for="staking in stakings" :key="staking.id">
                    <StakingCard :staking="staking" @staking="emitData" :active="form.staking.staking ? form.staking.staking.id : ''" :showBtn="false" />
                </div>
            </div>
            <div class="row mt-3 mb-5" style="margin-bottom: 14rem !important">
                <div class="col-12 col-md-6 mb-3">
                    <b-card>
                        <div v-if="form.staking && form.staking.staking">
                            <h4>
                                Duration
                            </h4>
                            <div class="row">
                                <div class="col-3 mb-2" v-for="benefit in JSON.parse(form.staking.staking.days)" :key="benefit">
                                    <b-button class="w-100" size="lg" @click="form.staking.days = benefit.name" :variant="form.staking.days == benefit.name ? 'primary' : 'secondary'">
                                        {{ benefit.name }} Days
                                    </b-button>
                                </div>
                            </div>
                        </div>
                        <h4>
                            Quantity to Staking
                        </h4>
                        <b-form-input placeholder="Ej. 100" class="mt-3" v-model="form.quantity"/>
                        <div class="row mt-4">
                            <div class="col-6">
                                <b-button class="w-100" size="lg" variant="link" @click="form.quantity = null; totalEarn = null">
                                    Clean
                                </b-button>
                            </div>
                            <div class="col-6">
                                <b-button class="w-100" size="lg" variant="primary" @click="makeStaking()">
                                    Calculate Staking
                                </b-button>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <b-card title="Results">
                        <div class="row mt-4">
                            <div class="col-6">
                                <h6>
                                    Earn
                                </h6>
                            </div>
                            <div class="col-6 text-right">
                                {{ totalEarn }}
                            </div>
                            <div class="col-6">
                                <h6>
                                    Percentage per day
                                </h6>
                            </div>
                            <div class="col-6 text-right">
                                {{ simulate.perDay }}%
                            </div>
                            <div class="col-6 mt-3">
                                <h4>
                                    Total GQ
                                </h4>
                            </div>
                            <div class="col-6 mt-3 text-right">
                                <h4>
                                    {{ coinFormat(simulate.total) }}
                                </h4>
                            </div>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import StakingCard from './StakingCard.vue'
import moment from 'moment'
export default {
    components: {
        StakingCard
    },
    data () {
        return {
            form: {
                staking: {id: null},
                quantity: null
            },
            totalEarn: null,
            simulate: {
                endDate: null,
                perDay: null,
                total: null
            }
        }  
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('staking', ['getStakings']),
        getData() {
            this.loading = true
            this.getStakings().then(() => {
                this.loading = false
            })
        },
        emitData (data) {
            this.form.staking = data
        },
        makeStaking () {

            console.log(this.form.staking.staking)

            this.simulate.perDay = this.form.staking.staking.percentage / 365
            this.simulate.perDay = parseFloat(this.simulate.perDay.toFixed(2))

            this.simulate.total = (this.form.quantity * (this.simulate.perDay / 100 )) * this.form.staking.days
            this.simulate.total = this.simulate.total.toFixed(2)
        },
        coinFormat(x) {
            if(x >= 0 && x != null) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return 0
            }
        }
    },
    computed: {
        ...mapState('staking', ['stakings'])
    }
}
</script>