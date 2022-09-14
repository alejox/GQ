<template>
    <div>
        <div  v-if="loading == false">
            <div class="row" v-if="memberships.length > 0">
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3" v-for="membership in memberships" :key="membership.id">
                    <CardPackage :membership="membership" />
                </div>
            </div>
            <div v-else>
                <Empty />
            </div>
        </div>
        <div v-else>
            <Loading type="card" />
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import CardPackage from './CardPackageDetail.vue'
export default {
    components: {
        CardPackage
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
        ...mapActions('membership', ['getMembershipsActive']),
        getData() {
            this.loading = true
            this.getMembershipsActive().then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('membership', ['memberships'])
    }
}
</script>