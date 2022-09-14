<template>
    <b-card class="wallet" :id="wallet.currency" :class="isActive == wallet.id ? 'bg-active' : ''" v-if="wallet">
        <div class="row">
            <div class="col-12">
                <h4  v-if="wallet.asset">
                    {{ wallet.asset.name }}
                </h4>
                <h6 class="uppercaze">
                    {{ wallet.asset.currency }}
                </h6>
            </div>
        </div>
        <div class="mt-3">
            <div class="address">
                {{ wallet.address }}
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-6">
                <h6 v-if="wallet.asset">
                    {{ wallet.balance.toFixed(2) }} {{ wallet.asset.token }}
                </h6>
                <div v-if="wallet.balance_usd">
                    ${{ wallet ? wallet.balance_usd.toFixed(2) : 0 }} USD
                </div>
            </div>
            <div class="col-6 text-right pt-3" v-if="wallet.asset">
                <img :src="wallet.asset.icon" alt="">
            </div>
        </div>
    </b-card>
</template>
<script>
import { mapActions } from 'vuex'
import Chart from './SecondChart.vue'
export default {
    components: {
        Chart
    },
    props: {
        wallet: {
            required: true
        },
        isActive: {
            default: false
        },
        isLock: {
            default: false
        }
    },
    data () {
        return {
            bsc: 0
        }
    },
    methods: {
        ...mapActions('wallet', ['getBalance'])
    },
    watch: {
        isActive: function (val) {
            if(val == this.wallet.id) {
                this.getBalance({address: this.wallet.address, currency: this.wallet.currency}).then(response => {
                    this.wallet.balance = response[0]
                    this.wallet.balance_usd = response[1]
                    this.bsc = response[2]
                })
            }
        }
    }
}
</script>
<style scoped>
    .card{
        box-shadow: none !important;
    }
    .address{
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .wallet img{
        max-width: 40px;
    }
    .wallet .price {
        font-weight: 300;
        font-size: 22px;
        line-height: 32px;
    }
    .price-usd{
        font-weight: 500;
        font-size: 22px;
        line-height: 32px;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }
    .bg-active{
        border: 3px solid #66E87E !important;
        border-radius: 35px !important;
        transition: .3s all;
    }
    .uppercaze{
        text-transform: uppercase;
    }
    
</style>