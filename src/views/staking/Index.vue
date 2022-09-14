<template>
    <div>
        <div class="margin-bottom">
            <div class="text-right mb-3">
                <b-button variant="primary" size="lg" :to="{ name: 'Create-Staking' }">
                    Create Staking
                </b-button>
            </div>
            <div class="row" v-if="stakings.length > 0">
                <div class="col-12 col-md-6 mb-3" v-for="staking in stakings" :key="staking.id">
                    <StakingCard :staking="staking" />
                </div>
            </div>
            <b-card v-else>
                <Empty text="Create your first staking"  />
            </b-card>
        </div>
    </div>
</template>
<script>
import StakingCard from './StakingCard.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        StakingCard
    },
    data () {
        return {
            modalCreate: false
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('staking', ['getSubStakings']),
        getData () {
            this.loading = true
            this.getSubStakings().then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('staking', ['stakings'])
    }
}
</script>