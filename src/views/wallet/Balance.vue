<template>
    <div>
        <div v-if="wallet.id != null">
            <b-card>
                <b-card-title>
                    <div class="row">
                        <div class="col-6">
                            Total balance
                        </div>
                        <div class="col-6 text-right" v-if="wallet.is_lock == 0">
                            <!-- <b-button variant="link" @click="modalDelete = true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5428 21.0037H8.45698C7.28078 21.0037 6.30288 20.0982 6.21267 18.9254L5.24707 6.37265H18.7527L17.7871 18.9254C17.6969 20.0982 16.719 21.0037 15.5428 21.0037V21.0037Z" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.0037 6.37264H3.99707" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.18602 2.99625H14.8134C15.4349 2.99625 15.9388 3.50014 15.9388 4.12172V6.37265H8.06055V4.12172C8.06055 3.50014 8.56444 2.99625 9.18602 2.99625Z" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.9699 10.8745V16.5019" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.0305 10.8745V16.5019" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </b-button> -->
                            <!-- <b-button variant="link" @click="modalKey = true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 14H14.75" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="9.5" cy="11.5" r="2.5" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.5 11.5H12" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="12" cy="12" r="9" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </b-button> -->
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <h1>
                            ${{ wallet ? wallet.balance_usd.toFixed(3) : 0 }}
                        </h1>
                        <h5 v-if="wallet" class="text-uppercase">
                            {{ wallet ? wallet.balance : 0 }} {{ wallet.asset ? wallet.asset.currency : '' }}
                        </h5>
                    </div>
                    <div class="row mt-5">
                        <div class="col-6">
                            <b-button variant="link" class="w-100 btn-lg" @click="modalWithdraw = true" v-if="wallet.is_lock == 0">
                                Withdraw
                            </b-button>
                        </div>
                        <div class="col-6">
                            <b-button variant="outline-primary" class="w-100 btn-lg" @click="modalDeposit = true">
                                Deposit
                            </b-button>
                        </div>
                    </div>
                </b-card-title>
            </b-card>
            <b-modal size="lg" centered hide-footer title="Withdraw" v-model="modalWithdraw" v-if="modalWithdraw == true">
                <Withdraw :wallet="wallet" />
            </b-modal>
            <b-modal size="lg" centered hide-footer title="Deposit" v-model="modalDeposit" v-if="modalDeposit == true">
                <Deposit :address="wallet.address" />
            </b-modal>
            <!-- <b-modal size="lg" centered hide-footer title="Get Private Key" v-model="modalKey" v-if="modalKey == true">
                <PrivateKey :pvKey="wallet.pvkey" :wallet_id="wallet.id" @close="modalKey = false" />
            </b-modal> -->
            <b-modal centered hide-footer title="You want delete?" v-model="modalDelete">
                Are you sure?
                <div class="row mt-4">
                    <div class="col-6">
                        <b-button variant="link" class="w-100 text-black">
                            Cancel
                        </b-button>
                    </div>
                    <div class="col-6">
                        <ButtonAction :loading="loading" block="true" loadingTx="Deleting..." title="Delete Wallet" @click="onDelete"/>
                    </div>
                </div>
            </b-modal>
        </div>
        <div v-else>
            <b-card>
                <Empty text="Please select a wallet" />
            </b-card>
        </div>
    </div>
</template>
<script>
import Withdraw from './actions/Withdraw.vue'
import Deposit from './actions/Deposit.vue'
import PrivateKey from './actions/PrivateKey.vue'
import { mapActions } from 'vuex'
export default {
    props: ['wallet'],
    components: {
        Withdraw,
        Deposit,
        PrivateKey
    },
    data () {
        return {
            modalDeposit: false,
            modalWithdraw: false,
            modalKey: false,
            modalDelete: false,
            loading: false
        }
    },
    methods: {
        ...mapActions('wallet', ['destroyWallet']),
        onDelete () {
            this.loading = true
            this.destroyWallet(this.wallet.id).then(() => {
                this.modalDelete = false
                this.loading = false
            })
        }
    }
}
</script>