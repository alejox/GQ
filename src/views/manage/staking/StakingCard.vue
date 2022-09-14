<template>
    <div>
        <b-card>
            <div class="card-title">
                <div class="d-flex" v-if="staking.asset">
                    <b-avatar :src="staking.asset.icon"></b-avatar>
                    <h4 class="pt-2" style="padding-left:10px">
                        {{ staking.asset.name }}
                    </h4>
                </div>
                <div class="row mt-4">
                    <div class="col-6">
                        <span>Time</span>
                        <h6>{{ staking.percentage }}%</h6>
                    </div>
                    <div class="col-6 text-right">
                        <span>Minimum</span>
                        <h6>{{ staking.minimum }}</h6>
                    </div>
                </div>
                <div class="mt-4">
                    Duration
                </div>
                <div class="row mt-3" v-if="staking.days">
                    <div class="col-3 mb-2" v-for="benefit in JSON.parse(staking.days)" :key="benefit">
                        <b-button class="w-100" size="lg" variant="secondary" v-if="benefit">
                            {{ benefit.name }} Days
                        </b-button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <b-button variant="secondary" class="w-100 mt-4" size="lg" @click="modalDelete = true">
                            Delete Staking
                        </b-button>
                    </div>
                    <div class="col-md-6">
                        <b-button variant="primary" class="w-100 mt-4" size="lg" @click="modalEdit = true">
                            Edit Staking
                        </b-button>
                    </div>
                </div>
            </div>
        </b-card>
        <b-modal size="lg" title="Edit Staking" centered hide-footer v-model="modalEdit">
            <Form :staking="staking" @close="modalEdit = false" />
        </b-modal>
        <b-modal centered hide-footer title="Delete membership" v-model="modalDelete">
            <h4>
                Sure you want delete?
            </h4>
            <div class="text-right">
                <b-button variant="secondary" class="mr-3" @click="modalDelete = false">
                    Cancel
                </b-button>
                <ButtonAction :loading="loading" loadingTx="Deleting membership" title="Delete Staking" @click="confirmeDelete(staking.id)"/>
            </div>
        </b-modal>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import Form from './Form.vue'
export default {
    props: ['staking'],
    components: {
        Form
    },
    data () {
        return {
            modalDelete: false,
            modalEdit: false
        }
    },
    methods: {
        ...mapActions('staking', ['destroyStaking', 'getStakings']),
        confirmeDelete (id) {
            this.loading = true
            this.destroyStaking(id).then(() => {
                this.loading = false
                this.modalDelete = false
                this.getStakings()
            })
        }
    }
}
</script>