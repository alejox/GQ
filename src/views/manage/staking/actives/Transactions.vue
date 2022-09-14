<template>
    <div class="text-left">
        <div class="row">
            <div class="col-6">
                <h2 class="text-white title">
                    Stakings
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
                    <b-form-select-option :value="membership.id" v-for="membership in memberships" :key="membership"> {{ membership.name }} </b-form-select-option>
                </b-form-select>
                </div>
            </div>
        </div>
        <b-table :items="stakings" :fields="fields">
            <template #cell(user)="row">
                {{ row.item.user ? row.item.user.username : '' }}
            </template>
            <template #cell(membership)="row">
                <b-avatar v-if="row.item.membership" :src="row.item.membership.image" class="mr-3" size="2rem" />
                {{ row.item.membership ? row.item.membership.name : '' }}
            </template>
            <template #cell(price)="row">

                <span class="text-success">
                    {{row.item.initial_tokens}} VUSD
                </span>
            </template>
            <template #cell(date)="row">
                {{ format_date(row.item.created_at) }}
            </template>
            <template #cell(status)="row">
                <div class="badge-success-special">Enabled</div>
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
        ...mapActions('staking', ['getStakingsAdmin', 'downloadFile']),
        getData() {
            if(this.pagination.username == '') {
                this.pagination.username = null
            }
            this.loading = true
            this.getStakingsAdmin(this.pagination).then(response => {
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
        ...mapState('staking', ['stakings'])
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