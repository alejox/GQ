<template>
    <div>
        <div v-if="loading == false">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3" v-for="signal in signals" :key="signal.id">
                    <CardSignal :signal="signal" />
                </div>
            </div>
        </div>
        <Loading v-else/>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import CardSignal from './CardSignal.vue'
export default {
    components: {
        CardSignal
    },
    data () {
        return {
            loading: false
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('signal', ['getSignals']),
        getData () {
            this.loading = true
            this.getSignals().then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('signal', ['signals'])
    }
}
</script>