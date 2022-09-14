<template>
    <div>
        <div class="row">
            <div class="col-12 col-md-6 offset-md-6 row">
                <div class="col-12 col-md-4 text-left">
                    <span class="text-white">From date</span>
                    <b-form-input type="date" v-model="pagination.from" />
                </div>
                <div class="col-12 col-md-4 text-left">
                    <span class="text-white">To date</span>
                    <b-form-input type="date" v-model="pagination.to"/>
                </div>
                <div class="col-12 col-md-4 text-left">
                    <span class="text-white">Username or email</span>
                    <b-form-input v-model="pagination.username" v-on:keyup.enter="getData()"/>
                </div>
            </div>
        </div>
        <section class="mb-5">
            <b-table :items="swaps.data" :fields="fields">
            <template #cell(user)="row">
                <div class="row">
                    <div class="col-3">
                        <b-avatar :src=" apiUrl + '/uploads/users/' + row.item.user.image " size="4rem"></b-avatar>
                    </div>
                    <div class="col-9 text-left">
                        <h5>
                            {{ row.item.user.username }}
                        </h5>
                        <h6>
                            {{ row.item.user.names }}
                        </h6>
                    </div>
                </div>
            </template>
            <template #cell(from)="row">
                <div class="text-left">
                    <h6>
                        {{ row.item.from.name }}
                    </h6>
                    <small>
                        {{ row.item.hash_from }}
                    </small>
                </div>
            </template>
            <template #cell(to)="row">
                <div class="text-left">
                    <h6>
                        {{ row.item.to.name }}
                    </h6>
                    <small>
                        {{ row.item.hash_to }}
                    </small>
                </div>
            </template>
            <template #cell(quantity)="row">
                <div class="text-left">
                    <h6>
                        {{ row.item.quantity }}
                    </h6>
                </div>
            </template>
            <template #cell(date)="row">
                <div class="text-left">
                    <h6>
                        {{ format_date(row.item.created_at) }}
                    </h6>
                </div>
            </template>
        </b-table>
        <div class="text-right mb-5">
            <b-button-group>
                <b-button variant="outline-primary" :disabled="swaps.meta.current_page == swaps.meta.first_page" @click="pagination.page = pagination.page  - 1">Previous</b-button>
                <b-button variant="outline-primary" :disabled="swaps.meta.current_page == swaps.meta.last_page" @click="pagination.page = pagination.page  + 1">Next</b-button>
            </b-button-group>
        </div>
        </section>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
export default {
    data () {
        return {
            modalEdit: false,
            tempUser: {
                id: null
            },
            loading: false,
            pagination: {
                username: null,
                from: null,
                to: null,
                page: 1
            },
            paginate: {
                current_page: 0,
                first_page: 0,
                last_page: 0
            },
            fields: [
                {key: 'user', thClass: 'text-left', label: 'User'},
                {key: 'from', thClass: 'text-left', label: 'From'},
                {key: 'to', thClass: 'text-left', label: 'To'},
                {key: 'date', thClass: 'text-left', label: 'Date'}
            ]
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('swap', ['getSwapsAdmin']),
        getData () {
            this.loading = false
            this.getSwapsAdmin(this.pagination).then(response => {
                this.paginate = response
            })
        },
        format_date(data) {
            return moment(data).format('Y-MM-DD')
        },
        editUser(user){
            this.tempUser = user
            this.modalEdit = true
        }
    },
    watch: {
        'pagination.page': function (val) {
            this.pagination.page = val
            this.getData()
        }
    },
    computed: {
        ...mapState('swap', ['swaps'])
    }
}
</script>
<style>
    .hide-head thead{
        display: none;
    }
</style>