<template>
    <div>
        <div class="scrolling-wrapper">
            <div class="card-scroll" v-for="wallet in wallets" :key="wallet.id">
            <CardWallet 
                @click="press == 'true' ? $emit('active', wallet) : '' "
                :isActive="isActive"
                :wallet="wallet"
            
            />
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import CardWallet from '../wallet/CardWallet.vue'
export default {
    props: {
        press: {
            default: false
        },
        isActive: {
            default: null
        }
    },
    components: {
        CardWallet
    },
    data () {
        return {
            loading: false
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
        }
    },
    computed: {
        ...mapState('wallet', ['wallets'])
    }
}
</script>
<style>
    .scrolling-wrapper {
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
    }
    .card-scroll {
        display: inline-block;
        margin-left: 20px;
        width: 280px;
    }
    ::-webkit-scrollbar {
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar-thumb {
        height: 5px;
        background-color: rgba(24, 30, 61, 0.53);
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(24, 30, 61, 0.53);
    }

    ::-webkit-scrollbar:vertical {
        display: none;
    }
</style>