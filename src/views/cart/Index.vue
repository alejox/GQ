<template>
    <div>
        <div>
            <div class="row">
                <div class="col-12 col-sm-5">
                    <Membership :membership="cart.details" v-if="cart.model == 'Membership'"/>
                    <Tokens :token="cart.details" v-if="cart.model == 'Token'"/>
                </div>
                <div class="col-12 col-sm-7 text-left">
                    <b-card>
                        <div class="row mt-4">
                            <div class="col-12 col-sm-5 text-center">
                                <qrcode-vue :value="cart.wallet" size="200" level="M"/>
                            </div>
                            <div class="col-12 col-sm-7 pt-3">
                                <h4>
                                    Wallet Address
                                </h4>
                                <Copy :address="cart.wallet" class="mt-3 mb-3" />
                                <h5 class="mt-3">
                                    Quantity
                                </h5>
                                <h3>
                                    {{ cart.price }} USD
                                </h3>
                                <div class="custom-badged mb-2">
                                    {{ cart.payment_method == 'usdt' ? 'USDT (TRC20)' : cart.payment_method == 'bsc' ? 'BSC' : 'BNB' }}
                                </div>
                                <p class="mt-2">
                                    Please send the corresponding amount to this wallet and click Verify Payment (You will receive confirmation in up to 5 minutes)
                                </p>
                            </div>
                            <div class="col-12 text-center" v-if="message != null && message != 'success'">
                                {{ message }}
                            </div>
                        </div>
                        <div class="row mt-4" v-if="cart.status == 0 || cart.status == 1">
                            <div class="col-12">
                                <ButtonAction :loading="loading" loadingTx="Verifying payment" size="lg" block="true" title="Confirm Deposit At this address" @click="confirmPayment"/>
                            </div>
                            <div class="col-12 mt-3">
                                <b-button variant="link" class="w-100" @click="cancelPayment">
                                    Cancel
                                </b-button>
                            </div>
                        </div>
                        <div v-else>
                            <b-button variant="primary" class="w-100" disabled>
                                <span v-if="cart.status != 2">
                                    Payment made
                                </span>
                                <span v-else>
                                    Payment canceled
                                </span>
                            </b-button>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
import Membership from './Membership.vue'
import Course from './Course.vue'
import Tokens from './Tokens.vue'

import { mapActions, mapState } from 'vuex'
export default {
    props: ['id'],
    components: {
        QrcodeVue,
        Membership,
        Course,
        Tokens
    },
    data () {
        return {
            loading: false,
            message: null
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('cart', ['getCart', 'checkPayment', 'destroyCart']),
        getData () {
            this.loading = true
            this.getCart(this.id).then(() => {
                this.loading = false
            })
        },
        cancelPayment () {
            this.loading = true
            this.destroyCart(this.id).then(() => {
                openNotification('Purchase canceled')
                this.loading = false
                this.$router.push({ name: 'Transactions' })
            })
        },
        confirmPayment () {
            this.loading = true
            this.checkPayment(this.id).then(response => {
                this.message = response
                this.loading = false
                if(response == 'success') {
                    openNotification()
                    this.getData()
                    this.$router.push({ name: 'Transactions' })
                }
            })
        }
    },
    computed: {
        ...mapState('cart', ['cart'])
    }
}
</script>