<template>
    <div>
        <div v-if="transactions">
            <b-table v-if="loading == false" class="mt-3" responsive :items="transactions" :fields="fields">
                <template #cell(hash)="row">
                    <div class="shortTx click" @click="copyURL(row.item.txHash)">
                        {{ row.item.txHash }}
                    </div>
                </template>
                <template #cell(time)="row">
                    {{ format_date(row.item.time) }}
                </template>
                <template #cell(from)="row">
                    <div class="shortTx click" @click="copyURL(row.item.from)">
                        {{ row.item.from }}
                    </div>
                </template>
                <template #cell(to)="row">
                    <div class="shortTx click" @click="copyURL(row.item.to)">
                        {{ row.item.to }}
                    </div>
                </template>
                <template #cell(quantity)="row">
                    <div :class="tempAddress == row.item.to ? 'tx-income' : 'tx-outcome'">
                        {{ row.item.value }}
                    </div>
                </template>
            </b-table>
            <Loading type="table" v-else/>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
export default {
    props: ['wallet_id'],
    data () {
        return {
            loading: false,
            fields: [
                { key: 'hash', label: 'Hash' },
                { key: 'time', label: 'Time' },
                { key: 'from', label: 'From' },
                { key: 'to', label: 'To' },
                { key: 'quantity', label: 'Quantity' }
            ],
            tempAddress: null
        }
    },
    created () {
        console.log(this.wallet_id)
        this.getData()
    },
    methods: {
        ...mapActions('wallet', ['getTransactions']),
        getData () {
            if(this.wallet_id) {
                
                const found = this.wallets.find(element => element.id == this.wallet_id);
                
                this.tempAddress = found.address

                this.loading = true
                this.getTransactions({ address: found.address, currency: found.currency}).then(response => {
                    this.loading = false
                })
            }
        },
        format_date (value) {
            let date = moment.unix(value);
            return date.format("YYYY MM DD, h:mm:ss A");
        },
        async copyURL (mytext) {
            try {
                await navigator.clipboard.writeText(mytext)
                openNotification('Copiado correctamente')
            } catch ($e) {
                openNotification('Intentalo nuevamente más tarde', 'error')
            }
        }
    },
    computed: {
        ...mapState('wallet', ['wallets', 'transactions'])
    },
    watch: {
        transaction: function (val) {
            console.log("VAL", val)
            this.getData()
        }
    }
}
</script>
<style>
    .shortTx{
        width: 200px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>