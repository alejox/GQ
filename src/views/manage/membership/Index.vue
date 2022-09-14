<template>
    <div>
        <div class="text-right">
            <b-button variant="secondary" size="lg" class="mr-3" @click="modalCreate = !modalCreate">
                Purchase Historial
            </b-button>
            <b-button variant="primary" size="lg" @click="modalCreate = !modalCreate">
                Create membership
            </b-button>
        </div>
        <div  v-if="loading == false">
            <div class="row" v-if="plans.length > 0">
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3" v-for="membership in plans" :key="membership.id">
                    <CardPackage :membership="membership" />
                </div>
            </div>
            <div v-else>
                <Empty />
            </div>
        </div>
        <div v-else>
            <Loading type="card" />
        </div>
        <b-modal title="Creating membership" hide-footer centered size="lg" v-model="modalCreate">
            <Form @close="modalCreate = false" />
        </b-modal>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import CardPackage from './CardPackage.vue'
import Form from './Form.vue'
export default {
    components: {
        CardPackage,
        Form
    },
    data () {
        return {
            loading: false,
            modalCreate: false
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('plan', ['getPlansAdmin']),
        getData () {
            this.loading = true
            this.getPlansAdmin().then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('plan', ['plans'])
    }
}
</script>