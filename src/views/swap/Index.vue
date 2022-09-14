<template>
    <div class="row">
        <div class="col-12 col-md-6 offset-md-3 mt-md-5">
            <b-card title="From">
                <div class="row">
                    <div class="col-12 col-md-6 mt-3">
                        <b-form-input placeholder="Ej. 100" v-model="form.quantity" />
                    </div>
                    <div class="col-12 col-md-6 mt-3" v-if="wallets.length > 0">
                        <b-form-select v-model="form.wallet" class="mb-3">
                                <b-form-select-option :disabled="wallet.currency == 'qta'" :value="wallet" v-for="wallet in wallets" :key="wallet.id"><span v-if="wallet.address">{{ wallet.address.slice(-15) }}</span> | {{ wallet.asset ? wallet.asset.name : '' }} </b-form-select-option>
                        </b-form-select>
                    </div>
                    <div class="col-12 col-md-6 pt-4 p-3" v-if="form.wallet != null">
                        {{fromPrice}} {{form.wallet.asset.token}} = 1 USD
                    </div>
                    <div class="col-12 col-md-6 text-right pt-4 p-3" v-if="form.wallet != null">
                        Balance <b>{{form.wallet.balance}} {{form.wallet.asset.token}}</b>
                        <b-button variant="link" @click="form.quantity = form.wallet.balance">
                            Max
                        </b-button>
                    </div>
                </div>
            </b-card>
            <div class="text-center mt-4 mb-4">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 18V18C4.5 10.5435 10.5435 4.5 18 4.5V4.5C25.4565 4.5 31.5 10.5435 31.5 18V18C31.5 25.4565 25.4565 31.5 18 31.5V31.5C10.5435 31.5 4.5 25.4565 4.5 18Z" stroke="url(#paint0_linear_644_56357)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 24V12" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.5 19.5L18 24L13.5 19.5" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_644_56357" x1="31.5" y1="4.5" x2="0.551708" y2="12.0999" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#13DC38"/>
                    <stop offset="1" stop-color="#13DC38"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_644_56357" x1="18.75" y1="12" x2="16.9287" y2="12.0559" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#13DC38"/>
                    <stop offset="1" stop-color="#13DC38"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_644_56357" x1="22.5" y1="19.5" x2="13.6875" y2="23.8281" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#13DC38"/>
                    <stop offset="1" stop-color="#13DC38"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <b-card title="To">
                <div class="row pb-3">
                    <div class="col-12 col-md-6 pt-3">
                        <h5 style="text-transform: uppercase" v-if="form.to">
                            ${{ total }} {{form.to.value}}
                        </h5>
                    </div>
                    <div class="col-12 col-md-4 offset-md-2">
                        <b-form-select v-model="form.to" class="mb-3" v-if="arrayTo.length > 0">
                            <b-form-select-option :value="to" v-for="to in arrayTo" :key="to.value" :disabled="to.status == false" >{{ to.name }} </b-form-select-option>
                        </b-form-select>
                    </div>
                    <div class="col-12 col-md-6 pt-4 p-3" v-if="form.wallet != null && form.to" style="text-transform: uppercase">
                        <b>
                             1 {{form.to.value}} = {{toPrice}} USD
                        </b>
                    </div>
                    <div class="col-12 col-md-6 pt-4 p-3 text-right" v-if="form.wallet != null && form.to" style="text-transform: uppercase">
                        <b>
                            Fee: {{ form.to.fee }}%
                        </b>
                    </div>
                </div>
            </b-card>
            <ButtonAction :loading="loading" title="Confirm Swap" :disabled="form.wallet == null || form.to == null || form.quantity == null" size="lg" class="w-100 mt-4" @click="onSubmit"/>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data () {
        return {
            loading: false,
            form: {
                wallet: null,
                quantity: null,
                to: null
            },
            arrayTo: [],
            fromPrice: 0,
            toPrice: 0,
            total: 0,
            fromVUSD: [
                { value: 'usdt', name: 'USDT', fee: 0.07, status: true },
                /* { value: 'qta', name: 'QUINTACOIN', fee: 0.1, status: true }, */
                { value: 'gqc', name: 'GQUANTUM', fee: 0.05, status: true },
                { value: 'gqusd', name: 'GQUSD', fee: 0.05, status: true },
                { value: 'mxp', name: 'MEXCOIN', fee: 0.07, status: true },
                { value: 'turc', name: 'TURCOIN', fee: 0.07, status: false }
            ],
            fromQTA: [
                /* { value: 'usdt', name: 'USDT', fee: 1, status: true },
                { value: 'gqc', name: 'GQUANTUM', fee: 1.5, status: true },
                { value: 'gqusd', name: 'GQUSD', fee: 1, status: true },
                { value: 'mxp', name: 'MEXCOIN', fee: 1.5, status: true },
                { value: 'turc', name: 'TURCOIN', fee: 1.5, status: false },
                { value: 'vusd', name: 'VUSD', fee: 1, status: false }, */
            ],
            fromGQC: [
                { value: 'usdt', name: 'USDT', fee: 1, status: true },
                /* { value: 'qta', name: 'QUINTACOIN', fee: 1.5, status: true }, */
                { value: 'gqusd', name: 'GQUSD', fee: 0.05, status: true },
                { value: 'mxp', name: 'MEXCOIN', fee: 0.07, status: true },
                { value: 'turc', name: 'TURCOIN', fee: 0.07, status: false },
                { value: 'vusd', name: 'VUSD', fee: 0.05, status: false },
            ],
            fromGQUSD: [
                { value: 'usdt', name: 'USDT', fee: 0.07, status: true },
                /* { value: 'qta', name: 'QUINTACOIN', fee: 0.1, status: true }, */
                { value: 'gqc', name: 'GQUANTUM', fee: 0.05, status: true },
                { value: 'mxp', name: 'MEXCOIN', fee: 0.07, status: true },
                { value: 'turc', name: 'TURCOIN', fee: 0.07, status: false },
                { value: 'vusd', name: 'VUSD', fee: 0.05, status: false },
            ],
            fromMXP: [
                { value: 'usdt', name: 'USDT', fee: 0.07, status: true },
                /* { value: 'qta', name: 'QUINTACOIN', fee: 0.15, status: true }, */
                { value: 'gqc', name: 'GQUANTUM', fee: 0.1, status: true },
                { value: 'gqusd', name: 'GQUSD', fee: 0.05, status: true },
                { value: 'turc', name: 'TURCOIN', fee: 0.15, status: false },
                { value: 'vusd', name: 'VUSD', fee: 0.05, status: false },
            ],
            fromTRC: [
                { value: 'usdt', name: 'USDT', fee: 0.07, status: true },
                /* { value: 'qta', name: 'QUINTACOIN', fee: 0.15, status: true }, */
                { value: 'gqc', name: 'GQUANTUM', fee: 0.05, status: true },
                { value: 'gqusd', name: 'GQUSD', fee: 0.05, status: true },
                { value: 'mxp', name: 'MEXCOIN', fee: 0.15, status: true },
                { value: 'vusd', name: 'VUSD', fee: 0.05, status: false },
            ]
        }
    },
    methods: {
        ...mapActions('wallet', ['getWallets', 'getPrice']),
        ...mapActions('swap', ['storeSwap']),
        getPriceFrom () {
            this.loading = true
            this.getPrice(this.form.wallet.currency).then(response => {
                this.fromPrice = response
                this.loading = false
            })
        },
        getPriceTo () {
            this.loading = true
            this.getPrice(this.form.to.value).then(response => {
                console.log({ response })
                this.toPrice = response
                this.loading = false
            })
        },
         onSubmit () {
         this.loading = true
          this.storeSwap(this.form).then(() => {
             openNotification('Swap confirmed')
            this.$router.push({
                name: 'Wallet'
                })
         })   
                this.loading = false
        }
    },
    computed: {
        ...mapState('wallet', ['wallets'])
    },
    watch: {
        'form.wallet': function () {
            this.getPriceFrom()
            if(this.form.wallet.currency == 'vusd') {
                this.arrayTo = this.fromVUSD
            } else if(this.form.wallet.currency == 'gqa') {
                this.arrayTo = this.fromQTA
            } else if(this.form.wallet.currency == 'gqc') {
                this.arrayTo = this.fromGQC
            } else if(this.form.wallet.currency == 'gqusd') {
                this.arrayTo = this.fromGQUSD
            } else if(this.form.wallet.currency == 'mxp') {
                this.arrayTo = this.fromMXP
            } else if(this.form.wallet.currency == 'turc') {
                this.arrayTo = this.fromTRC
            } else if(this.form.wallet.currency == 'turc') {
                this.arrayTo = this.fromTRC
            } else {
                this.arrayTo = []
            }
        },
        'form.to': function () {
            this.getPriceTo()
        },
        'form.quantity': function () {
            this.total = ((this.fromPrice * this.form.quantity) / this.toPrice).toFixed(2)
            if(this.total == Infinity){
                this.total = 0
            }
        }
    }
}
</script>