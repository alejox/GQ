<template>
<div>
    <b-tabs content-class="mt-3">
        <b-tab title="All packages" active>
            <div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3" v-for="plan in plans" :key="plan.id">
                        <CardPackage :plan="plan" />
                    </div>    
                </div>
            </div>
        </b-tab>
        <b-tab title="Active packages" lazy><p>I'm the second tab</p></b-tab>
    </b-tabs>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import CardPackage from './CardPackage.vue'
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
        ...mapActions('plan',['getPlans']),
        getData() {
            this.loading = true
            this.getPlans().then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('plan', ['plans'])
    }
}
</script>