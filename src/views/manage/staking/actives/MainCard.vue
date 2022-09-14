<template>
    <b-card>
        <div class="row p-4">
            <div class="col-8">
                <b-form-select v-model="filter.type">
                    <b-form-select-option :value="membership.id" v-for="membership in memberships" :key="membership"> {{ membership.name }} </b-form-select-option>
                </b-form-select>
            </div>
            <div class="col-4 text-right text-center">
                <div class="container-icon" style="width:60px; float: right">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0038 9.49887V6.49762C21.0038 5.11634 19.8841 3.99658 18.5028 3.99658H5.49738C4.11609 3.99658 2.99634 5.11634 2.99634 6.49762V7.99825" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.0038 14.501V17.5022C21.0038 18.8835 19.8841 20.0033 18.5028 20.0033H13.0005" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.99585 12.6006V19.4034C1.99699 20.2872 3.78746 21.0041 5.99752 21.0041C8.20758 21.0041 9.99804 20.2872 9.99918 19.4034V12.6006" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.99804 12.6007C9.99804 13.4845 8.20644 14.2013 5.99638 14.2013C3.78632 14.2013 1.99585 13.4845 1.99585 12.6007C1.99585 11.7157 3.7886 11 5.99752 11C8.20644 11 9.99804 11.7169 9.99918 12.6007" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.99658 16.002C1.99658 16.8858 3.78705 17.6026 5.99711 17.6026C8.20717 17.6026 9.99877 16.8858 9.99877 16.002" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5028 9.49902H21.0038C21.5563 9.49902 22.0042 9.94693 22.0042 10.4994V13.5007C22.0042 14.0532 21.5563 14.5011 21.0038 14.5011H18.5028C17.1215 14.5011 16.0017 13.3814 16.0017 12.0001V12.0001C16.0017 10.6188 17.1215 9.49902 18.5028 9.49902V9.49902Z" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="text-center">
            <h6 class="mb-3 mt-3">
                Total purchases  
            </h6>
            <h1 class="mb-5" v-if="total.length > 0">
                ${{ total[0].meta ? coinFormat(total[0].meta.total) : 0 }}
            </h1>
        </div>
    </b-card>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data () {
        return {
            loading: false,
            filter: {
                type: null
            },
            total: 0
        }
    },
    created () {
        this.getData()
        this.getMemberships()
    },
    methods: {
        ...mapActions('membership', ['getMemberships']),
        ...mapActions('staking', ['getTotalsAdmin']),
        getData() {
            this.loading = false
            this.getTotalsAdmin(this.filter).then(response => {
                this.total = response
                this.loading = false
            })
        },
        coinFormat(x) {
            if(x >= 0 && x != null) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return 0
            }
        }
    },
    computed: {
        ...mapState('membership', ['memberships'])
    },
    watch: {
        'filter.type': function (val) {
            this.filter.type = val
            this.getData()
        }
    }
}
</script>