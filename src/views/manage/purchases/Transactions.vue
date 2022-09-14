<template>
    <div class="text-left">
        <div class="row">
            <div class="col-6">
                <h2 class="text-white title">
                    Transactions
                </h2>
            </div>
            <div class="col-6 row">
                <div class="col-12 col-sm-3 pt-2">
                    <div class="text-right">
                        <b-button variant="outline-primary" @click="generateReport">
                            Download Report
                        </b-button>
                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <b-form-input type="text" v-on:keyup.enter="getData()" placeholder="Enter Username or email and press enter" v-model="pagination.username" />
                </div>
                <div class="col-12 col-sm-3">
                    
                <b-form-select v-model="pagination.type">
                    <b-form-select-option value="Membership"> Membership</b-form-select-option>
                    <b-form-select-option value="Token"> Token</b-form-select-option>
                </b-form-select>
                </div>
            </div>
        </div>
        <b-table :items="carts" :fields="fields">
            <template #cell(user)="row">
                {{ row.item.user ? row.item.user.username : '' }}
            </template>
            <template #cell(membership)="row">
                {{ row.item.model }}
            </template>
            <template #cell(price)="row">

                <span class="text-success">
                    ${{ coinFormat(row.item.price) }}
                </span>
            </template>
            <template #cell(date)="row">
                {{ format_date(row.item.created_at) }}
            </template>
            <template #cell(status)="row">

                <div class="badge-danger-special" v-if="row.item.status == 0">Created</div>
                <div class="badge-success-special" v-if="row.item.status == 1">Approved</div>
                <div class="badge-danger-special" v-if="row.item.status == 2">Canceled</div>
                <div class="badge-danger-special" v-if="row.item.status == 3">Incomplete</div>
                <div class="badge-success-special" v-if="row.item.status == 4">Approved and send</div>
                <div class="badge-success-special" v-if="row.item.status == 5">Withdrawed</div>
                <div class="badge-success-special" v-if="row.item.status == 6">Withdrawing</div>
            </template>
        </b-table>
        <div class="text-right">
            <b-button-group>
                <b-button variant="outline-primary" :disabled="paginate.current_page == paginate.first_page" @click="pagination.page = pagination.page  - 1">Previous</b-button>
                <b-button variant="outline-primary" :disabled="paginate.current_page == paginate.last_page" @click="pagination.page = pagination.page  + 1">Next</b-button>
            </b-button-group>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
export default {
    data () {
        return {
            loading: false,
            fields: ['user', 'membership', 'date', 'status', 'price'],
            pagination: {
                username: null,
                type: null,
                page: 1
            },
            paginate: {
                current_page: 0,
                first_page: 0,
                last_page: 0
            }
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('cart', ['getCartsAdmin', 'downloadFile']),
        getData() {
            this.loading = true
            this.getCartsAdmin(this.pagination).then(response => {
                this.paginate = response
                this.loading = false
            })
        },
        generateReport () {
            this.loading = true
            this.downloadFile(this.pagination).then(response => {
                this.loading = false
                window.open(`${this.apiUrl}/purchases.xlsx`, '_blank')
            })  
        },
        format_date(data) {
            return moment(data).format('Y-MM-DD')
        },
        coinFormat(x) {
            if(x >= 0) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return 0
            }
        }
    },
    computed: {
        ...mapState('membership', ['memberships']),
        ...mapState('cart', ['carts'])
    },
    watch: {
        'pagination.type': function (val) {
            this.pagination.type = val
            this.getData()
        },
        'pagination.page': function (val) {
            this.pagination.page = val
            this.getData()
        }
    }
}
</script>
<style>
    .badge-success-special{
        background: rgba(14, 197, 100, 0.05);
        text-align: center;
        border-radius: 8px;
        padding: 5px;
        color: #0EC564;
        max-width: 100px;
    }
    .badge-danger-special{
        background: rgba(255, 171, 27, 0.05);
        text-align: center;
        border-radius: 8px;
        padding: 5px;
        color: #13DC38;
        max-width: 100px;
    }
</style>