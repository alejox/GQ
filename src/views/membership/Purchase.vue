<template>
    <div>
        <h5>
            {{ plan.name }}
        </h5>
        <h2>
            ${{ plan.price }}<small>/USD</small>
        </h2>
        <div class="mt-3">
            <div class="text-left mb-3">
                <h2>
                    Select payment method
                </h2>
            </div>
            <div class="row">
                <div class="col-4 text-center click" @click="form.payment_method = 'usdt'">
                    <img class="w-100" :class="form.payment_method == 'usdt' ? 'pay-active' : ''" src="@/assets/icons/usdt.png" alt="">
                </div>
                <div class="col-4 text-center click" @click="form.payment_method = 'bnb'">
                    <img class="w-100" :class="form.payment_method == 'bnb' ? 'pay-active' : ''" src="@/assets/icons/bnb.png" alt="">
                </div>
            </div>
        </div>
        <div class="text-right mt-4">
            <b-button variant="secondary" class="mr-3" @click="$emit('close')">
                Cancel
            </b-button>
            <ButtonAction :disabled="form.payment_method == null" :loading="loading" loadingTx="Creating..." title="Confirm purchase" @click="onSubmit"/>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    props: ['plan'],
    data () {
        return {
            form: {
                title: null,
                price: null,
                payment_method: null,
                model: 'Membership',
                model_id: null
            },
            loading: false
        }
    },
    created () {
        if(this.plan) {
            this.form.title = this.plan.name
            this.form.price = this.plan.price
            this.form.model_id = this.plan.id
        } else {
            openNotification('Uknown Error', 'error')
        }
    },
    methods: {
        ...mapActions('cart', ['storeCart']),
        onSubmit () {
            this.loading = true
            this.storeCart(this.form).then(response => {
                this.loading = false
                openNotification()
                this.$emit('close')
                this.$router.push({ name: 'Cart', params: { id: response.id } })
            })
        }
    },
    computed: {
        ...mapState('membership', ['memberships'])
    }
}
</script>
<style scoped>
    .pay-active{
        border: 5px solid #13DC38 !important;
        border-radius: 20px !important;
    }
    .pay-active h4{
        color: #13DC38 !important;
    }
</style>