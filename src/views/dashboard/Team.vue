<template>
    <div class="h-100">
        <b-card title="Ranking referral" class="h-100">
            <div class="row mt-5 mb-5">
                <div class="col-3 left text-center">
                    <b-avatar :src="apiUrl + '/uploads/users/' + missing[2].image " size="5rem" v-if=" missing[2] && missing[2].image != 'default.png'" />
                    <b-avatar src="/images/left.png" size="5rem" v-else/>
                    <div style="font-size:20px" class="mt-2">
                        {{ missing[2] && missing[2].referrals ? missing[2].referrals: 0 }} referrals
                    </div>
                </div>
                <div class="col-5 center text-center" >
                    <b-avatar :src="apiUrl + '/uploads/users/' + missing[0].image " size="8rem" v-if=" missing[0] && missing[0].image != 'default.png'" />
                    <b-avatar src="/images/center.png" size="8rem" v-else/>
                    <div style="font-size:20px" class="mt-2">
                        {{ missing[0] && missing[0].referrals ? missing[0].referrals: 0 }} referrals
                    </div>
                </div>
                <div class="col-4 right text-center" >
                    <b-avatar :src="apiUrl + '/uploads/users/' + missing[1].image " size="6rem" v-if=" missing[1] && missing[1].image != 'default.png'" />
                    <b-avatar src="/images/right.png" size="6rem" v-else/>
                    <div style="font-size:20px" class="mt-2">
                        {{ missing[1] && missing[1].referrals ? missing[1].referrals : 0 }} referrals
                    </div>
                </div>
            </div>
        </b-card>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data ()
    {
        return {
            missing: 0
        }
    },
    methods: {
        ...mapActions('user', ['getMostRef']),
        getData () {
            this.loading = true
            this.getMostRef().then(response => {
                this.loading = false
                this.missing = response
            })
        }
    },
    created() {
        this.getData()
    }
}
</script>
<style>
    .left .b-avatar{
        border: white 5px solid !important;
    }
    .center .b-avatar{
        border: 8px solid #13DC38;
        filter: drop-shadow(0px 4px 100px rgba(227, 200, 122, 0.4));
    }
    .right .b-avatar{
        border: 5px solid #E38800;
        filter: drop-shadow(0px 4px 100px rgba(227, 136, 0, 0.4));
    }
</style>