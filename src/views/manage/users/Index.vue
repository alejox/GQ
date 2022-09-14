<template>
    <div>
        <div class="row">
            <div class="col-12 col-md-6 text-left">
                <h2 class="text-white">
                    Users list {{ paginate.total ? paginate.total : '0' }}
                </h2>
            </div>
            <div class="col-12 offset-md-1 col-md-3 text-right">
                <b-form-input placeholder="Enter a username or email and press enter" v-on:keyup.enter="getData()" v-model="pagination.username" />
            </div>
            <div class="col-12 col-md-2 text-right">
                <b-button variant="primary" size="lg">
                    Export Users
                </b-button>
            </div>
        </div>
        <section class="mb-5">
            <b-table :items="users" :fields="fields" class="hide-head">
            <template #cell(user)="row">
                <div class="row">
                    <div class="col-3">
                        <b-avatar :src=" apiUrl + '/uploads/users/' + row.item.image " size="4rem"></b-avatar>
                    </div>
                    <div class="col-9 text-left">
                        <h5>
                            {{ row.item.username }}
                        </h5>
                        <h6>
                            {{ row.item.names }}
                        </h6>
                    </div>
                </div>
            </template>
            <template #cell(email)="row">
                <div class="text-left">
                    <h6>
                        Email
                    </h6>
                    <div>
                        {{ row.item.email }}
                    </div>
                </div>
            </template>
            <template #cell(date)="row">
                <div class="text-left">
                    <h6>
                        Register date
                    </h6>
                <div>
                    {{ format_date(row.item.created_at) }}
                </div>
                </div>
            </template>
            <template #cell(sponsor)="row">
                <div class="text-left">
                    <h6>
                        Sponsor
                    </h6>
                <div>
                    {{ row.item.user ? row.item.user.username : '' }}
                </div>
                </div>
            </template>
            <template #cell(plan)="row">
                <div class="text-left">
                    <h6>
                        Membership
                    </h6>
                <div>
                    Show Memberships
                </div>
                </div>
            </template>
            <template #cell(options)="row">
                <div class="pt-3">
                    <b-button variant="link" @click="editUser(row.item)">
                        Edit
                    </b-button>
                </div>
            </template>
        </b-table>
        <div class="text-right mb-5">
            <b-button-group>
                <b-button variant="outline-primary" :disabled="paginate.current_page == paginate.first_page" @click="pagination.page = pagination.page  - 1">Previous</b-button>
                <b-button variant="outline-primary" :disabled="paginate.current_page == paginate.last_page" @click="pagination.page = pagination.page  + 1">Next</b-button>
            </b-button-group>
        </div>
        </section>
        <b-modal v-model="modalEdit" title="Edit user" centered hide-footer>
            <Profile :userEdit="tempUser" :key="tempUser.id" @close="modalEdit = false" />
        </b-modal>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import Profile from './Profile.vue'
export default {
    components: {
        Profile
    },
    data () {
        return {
            modalEdit: false,
            tempUser: {
                id: null
            },
            loading: false,
            pagination: {
                username: null,
                page: 1
            },
            paginate: {
                current_page: 0,
                first_page: 0,
                last_page: 0
            },
            fields: ['user', 'email', 'sponsor', 'plan', 'date', 'options']
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('user', ['getUsers']),
        getData () {
            this.loading = false
            this.getUsers(this.pagination).then(response => {
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
        ...mapState('user', ['users'])
    }
}
</script>
<style>
    .hide-head thead{
        display: none;
    }
</style>