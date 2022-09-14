<template>
    <div class="row">
        <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <b-card>
                <div class="text-center p-3">
                    <img src="@/assets/images/purchase.png" alt="">
                    <h5 class="mt-4">
                        Now you can send the quantity you want and we send you the equal quantity in Vusd
                    </h5>
                </div>
                <div class="row">
                    <!-- <div class="col-4 text-center click" @click="form.payment_method = 'btc'">
                        <img :class="form.payment_method == 'btc' ? 'pay-active' : ''" src="@/assets/icons/btc.png" alt="">
                    </div> -->
                    <div class="col-6 col-md-4 offset-md-2 text-center click" @click="form.payment_method = 'usdt'">
                        <img class="w-100 payment" :class="form.payment_method == 'usdt' ? 'pay-active' : ''" src="@/assets/icons/usdt.png" alt="">
                    </div>
                    <div class="col-6 col-md-4 text-center click" @click="form.payment_method = 'bnb'">
                        <img class="w-100 payment" :class="form.payment_method == 'bnb' ? 'pay-active' : ''" src="@/assets/icons/bnb.png" alt="">
                    </div>
                </div>
                <b-alert show variant="light" class="mt-5">
                    Alter payment you will receive the tokens in 1 to 5 minutes (In case you don’t receive it please contact our support team)
                </b-alert>
                <div class="text-center">
                    <ButtonAction title="Confirm purchase" :loading="loading" :disabled="form.payment_method == null" lg="true" @click="onSubmit"/>
                    <!-- <b-button size="lg" variant="primary" :disabled="form.payment_method == null">
                        Confirm Purchase
                    </b-button> -->
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data () {
        return {
            form: {
                title: 'Purchase Vusd',
                price: null,
                payment_method: null,
                model: 'Token',
                model_id: null
            }
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
    }
}
</script>
<style>
    .alert-light{
        border-radius: 16px;
    }
    .pay-active{
        border: 4px solid #13DC38;
        border-radius: 20px;
    }
    .payment{
        border-radius: 20px;
    }
</style>