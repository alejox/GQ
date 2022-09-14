<template>
    <div>
        <div class="text-right">
            <b-button size="lg" class="mb-3" variant="primary" @click="createSignal = !createSignal">
                Create Signal
            </b-button>
        </div>
        <div v-if="loading == false">
            <div class="row" v-if="signals.length > 0">
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3" v-for="signal in signals" :key="signal.id">
                    <CardSignal :signal="signal" />
                </div>
            </div>
                <Empty v-else/>
        </div>
            <Loading v-else/>
        <b-modal size="lg" centered hide-footer title="Creando Señal" v-model="createSignal">
            <Form @close="createSignal = false" />
        </b-modal>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import CardSignal from './CardSignal.vue'
import Form from './Form.vue'
export default {
    components: {
        CardSignal,
        Form
    },
    data () {
        return {
            loading: false,
            createSignal: false
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