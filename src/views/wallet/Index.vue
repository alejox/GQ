<template>
    <div>
        <div class="text-right mb-3">
            <b-button variant="primary" size="lg" @click="modalCreate = true">
                Create Wallet
            </b-button>
        </div>
        <WalletSlider @active="selectWallet" press="true" :isActive="cardActive.id" v-if="windowWidth < 900" />
        <div class="row" style="margin-bottom: 80px">
            <div class="col-sm-12 col-lg-3 col-md-4 scrollable" v-if="windowWidth > 900">
                <div class="scrollable">
                    <div class="mb-3" v-for="wallet in wallets" :key="wallet.id">
                        <CardWallet :isActive="cardActive.id" :wallet="wallet" @click="cardActive = wallet" />
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-9 col-md-8 row">
                <div class="row">
                    <div class="col-12">
                        <Balance :wallet="cardActive" />
                        <Transactions :wallet_id="cardActive.id" :key="cardActive.id" class="mt-3"/>
                    </div>
                </div>
                <!-- <div class="col-12 col-md-6">
                    <Chart :currency="cardActive.currency" :key="cardActive.currency" />
                </div> -->
            </div>
        </div>
        <b-modal size="lg" title="Crear wallet" centered hide-footer v-model="modalCreate">
            <Create @close="closeModals" />
        </b-modal>
        <b-modal centered title="Wallet deposit" hide-footer v-model="modelDeposit">
            <Deposit :address="cardActive.address" />
        </b-modal>
    </div>
</template>
<script>
import Transactions from './Transactions.vue'
import CardWallet from './CardWallet.vue'
import Create from './actions/Create.vue'
import Deposit from './actions/Deposit.vue'
import WalletSlider from './WalletSlider.vue'

import Chart from './Chart.vue'
import Balance from './Balance.vue'

import { mapActions, mapState } from 'vuex'
export default {
    components: {
        Chart,
        Balance,
        Create,
        CardWallet,
        Transactions,
        Deposit,
        WalletSlider
    },
    data () {
        return {
            loading: false,
            modalCreate: false,
            modelDeposit: false,
            cardActive: {
                id: null
            },
            windowWidth: window.innerWidth
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
        selectWallet (data) {
            this.cardActive = data
        },
        closeModals () {
            this.modalCreate = false
            this.getData()
        }
    },
    computed: {
        ...mapState('wallet', ['wallets'])
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }
    }
}
</script>
<style>
    .scrollable{
        height: 900px;
        overflow-y: scroll;
        background: transparent;
    }
</style>