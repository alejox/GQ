<template>
    <div class="text-left">
        <h2 class="text-white mb-3">
            Select a wallet to withdraw the tokens
        </h2>
        <div class="row">
            <div class="col-sm-6 col-md-4 mb-3" v-for="wallet in wallets" :key="wallet.id">
                <CardWallet :isActive="cardActive.id" :wallet="wallet" @click="selectWallet(wallet)" />
            </div>
            <div class="col-md-4 offset-md-8 mb-3">
                <span class="text-white">Quantity to staking</span>
                <b-form-input placeholder="Enter quantity" v-model="quantity"/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import CardWallet from '../../wallet/CardWallet.vue'
export default {
    components: {
        CardWallet
    },
    data () {
        return {
            cardActive: {
                id: null
            }
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('wallet', ['getWallets']),
        getData () {
            this.loading = true
            this.getWallets().then(() => {
                this.loading = false
            })
        },
        selectWallet(wallet) {
            this.cardActive = wallet
            this.$emit('select', wallet)
        }
    },
    computed: {
        ...mapState('wallet', ['wallets'])
    },
    watch: {
        quantity: function (val) {
            this.$emit('quantity', val)
        }
    }
}
</script>