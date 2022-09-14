<template>
    <div>
        <div class="row mt-3">
            <div class="col-12 col-md-6">
                <h3 class="title pt-4">
                    Transactions
                </h3>
            </div>
            <div class="col-12 col-md-6 row">
                <div class="col-12 col-md-4 offset-md-4 text-left">
                    <span class="text-white">From date</span>
                    <b-form-input type="date" v-model="pagination.from" />
                </div>
                <div class="col-12 col-md-4 text-left">
                    <span class="text-white">To date</span>
                    <b-form-input type="date" v-model="pagination.to"/>
                </div>
                <!-- <div class="col-12 col-md-4 text-left">
                    <span class="text-white">Username or email</span>
                    <b-form-input />
                </div> -->
            </div>
        </div>
        <b-table v-if="loading == false" class="mt-3" responsive :items="transactions.data" :fields="fields">
            <template #cell(description)="row">
                {{ row.item.description }}
            </template>
            <template #cell(date)="row">
                {{ formatDate(row.item.created_at) }}
            </template>
            <template #cell(quantity)="row">
                {{ row.item.quantity }}
            </template>
            <template #cell(type)="row">
                {{ row.item.type == 1 ? 'IN' : 'OUT' }}
            </template>
        </b-table>
        <Loading type="table" v-else/>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
export default {
    data () {
        return {
            loading: false,
            fields: [
                { key: 'description', label: 'Description' },
                { key: 'quantity', label: 'Quantity' },
                { key: 'type', label: 'Type' },
                { key: 'date', label: 'Date' }
            ],
            pagination: {
                from: null,
                to: null,
                category: null,
                page: 1
            }
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('cart', ['getTransactions']),
        getData () {
            this.loading = true
            this.getTransactions(this.pagination).then(() =>{
                this.loading = false
            })
        },
        formatDate(date) {
            return moment(date).format('Y-MM-DD')
        }
    },
    computed: {
        ...mapState('cart', ['transactions'])
    },
    watch: {
        'pagination.from': function () {
            this.getData()
        },
        'pagination.to': function () {
            this.getData()
        }
    }
}
</script>
<style>
    ::-webkit-calendar-picker-indicator {
    filter: invert(1);
    border-radius: 50%;
    padding: 4px;
  }
</style>