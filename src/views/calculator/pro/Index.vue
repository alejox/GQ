<template>
    <div class="row">
        <div class="col-12 col-md-8 offset-md-2 text-left">
            <h3 class="mb-3 text-white">
                Select plan
            </h3>
            <div class="row">
                <div class="col-12 col-md-4 mb-3" v-for="membership in memberships" :key="membership.id">
                    <CardPlan :active="form.membership.id" :membership="membership" @select="selectMember" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 col-md-6 mb-3">
                    <b-card title="Quantity to Staking">
                        <b-form-input placeholder="Ej. 100" class="mt-3" v-model="form.quantity"/>
                        <div class="row mt-4">
                            <div class="col-6">
                                <b-button class="w-100" size="lg" variant="link" @click="form.quantity = null; totalEarn = null">
                                    Clean
                                </b-button>
                            </div>
                            <div class="col-6">
                                <b-button class="w-100" size="lg" variant="primary" @click="makeStaking">
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
                                    Percentage
                                </h6>
                            </div>
                            <div class="col-6 text-right">
                                {{ form.membership.percentage }}%
                            </div>
                            <div class="col-6 mt-3">
                                <h4>
                                    Total Veta
                                </h4>
                            </div>
                            <div class="col-6 mt-3 text-right">
                                <h4>
                                    {{ totalEarn ? parseFloat(totalEarn) + parseFloat(form.quantity) : 0 }}
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
import CardPlan from '../CardPlan.vue'
export default {
    components: {
        CardPlan
    },
    data () {
        return {
            form: {
                membership: {id: null},
                quantity: null
            },
            totalEarn: null
        }  
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('membership', ['getMemberships']),
        getData() {
            this.loading = true
            this.getMemberships(1).then(() => {
                this.loading = false
            })
        },
        selectMember (data) {
            this.form.membership = data
        },
        makeStaking () {
            console.log("HOLA")
            this.totalEarn = 0
            this.showCalc = true
            console.log(this.form.membership.months)
            for (var i = 1; i <= this.form.membership.months; i++) {
                const total = ((this.form.quantity * ((this.form.membership.percentage / 100))))

                this.totalEarn = this.totalEarn + total
            }
        }
    },
    computed: {
        ...mapState('membership', ['memberships'])
    }
}
</script>