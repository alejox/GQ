<template>
    <div>
        <b-card>
            <b-card-img :src="apiUrl + '/uploads/plans/'+membership.image" alt="Image" class="rounded-0"></b-card-img>

            <div class="plan-name">
                {{ membership.name }}
            </div>
            <div class="plan-price mt-2 mb-2">
                <span>${{membership.price}}</span>/usd
            </div>
            <div>
                <div class="custom-badged mb-2 mr-3">
                    {{ membership.payment_monthly == 1 ? 'Payment monthly enabled' : 'Payment monthly disabled' }}
                </div>
                <div class="custom-badged mb-2">
                    {{ membership.is_enable == 1 ? 'Membership enabled' : 'Membership disabled' }}
                </div>
            </div>
            <div class="mt-2 row">
                <div class="col-6">
                    <b-button variant="secondary" class="w-100" @click="modalDelete = !modalDelete">
                        Delete
                    </b-button>
                </div>
                <div class="col-6">
                    <b-button variant="primary" class="w-100" @click="modalEdit = !modalEdit">
                        Edit
                    </b-button>
                </div>
            </div>
        </b-card>
        <b-modal size="lg" title="Edit Staking" centered hide-footer v-model="modalEdit">
            <Form :membership="membership" @close="modalEdit = false" />
        </b-modal>
        <b-modal centered hide-footer title="Delete membership" v-model="modalDelete">
            <h4>
                Sure you want delete?
            </h4>
            <div class="text-right">
                <b-button variant="secondary" class="mr-3" @click="modalDelete = false">
                    Cancel
                </b-button>
                <ButtonAction :loading="loading" loadingTx="Deleting membership" title="Delete Membership" @click="confirmeDelete(membership.id)"/>
            </div>
        </b-modal>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import Form from './Form.vue'
export default {
    props: {
        membership: {
            required: true
        }
    },
    components: {
        Form
    },
    data () {
        return {
            modalEdit: false,
            modalDelete: false,
            loading: false
        }
    },
    methods: {
        ...mapActions('membership', ['updateMembership', 'destroyMembership']),
        confirmeDelete (id) {
            this.loading = true
            this.destroyMembership(id).then(() => {
                this.loading = false
            })
        }
    },
}
</script>
<style scoped>
    .plan-name{
        font-weight: 300;
        font-size: 22px;
        line-height: 32px;
    }
    .plan-price{
        font-weight: 300;
        font-size: 36px;
        line-height: 40px;
    }
    .plan-price span {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
    }
</style>