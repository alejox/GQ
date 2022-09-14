<template>
    <div>
        <div class="row">
            <div class="col-12 mb-3">
                <Stats />
            </div>
            <div class="col-12 col-md-12 col-lg-4 mb-4">
                <Stakings />
            </div>
            <div class="col-12 col-md-12 col-lg-8 mb-4">
                <Membership />
            </div>
            <div class="col-12 col-md-12 col-lg-6 mb-4">
                <Team />
            </div>
            <div class="col-12 col-md-12 col-lg-6 mb-4">
                <Wallets />
            </div>
        </div>
    </div>
</template>
<script>
import Benefits from './Benefits.vue'
import Wallets from './Wallets.vue'
import Team from './Team.vue'
import Referred from './Referred.vue'
import Stats from './Stats.vue'
import Stakings from './Stakings.vue'
import Membership from './Membership.vue'

export default {
    components: {
        Stakings,
        Benefits,
        Wallets,
        Team,
        Referred,
        Stats,
        Membership
    },
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }
    }
    
}
</script>