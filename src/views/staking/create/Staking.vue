<template>
    <div>
        <div>
            <div class="row">
                <div class="col-12 col-md-6 mb-3" v-for="staking in stakings" :key="staking.id">
                    <StakingCard :staking="staking" :active="active" @staking="emitData" @emitSelected="emitSelected" />
                </div>
            </div>
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
            modalCreate: false,
            active: null
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('staking', ['getStakings']),
        getData () {
            this.loading = true
            this.getStakings().then(() => {
                this.loading = false
            })
        },
        emitSelected (data) {
            this.active = data
        },
        emitData(data) {
            this.$emit('select', data)
        }
    },
    computed: {
        ...mapState('staking', ['stakings'])
    }
}
</script>