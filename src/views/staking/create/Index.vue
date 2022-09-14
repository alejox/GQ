<template>
    <div class="pt-5 row">
        <div class="col-12 col-md-10 offset-md-1 margin-bottom">
          <div v-if="currentTabIndex === 0">
                <Staking @select="selectStaking"/>
            </div>
            <div v-if="currentTabIndex === 1">
                <Wallet @select="selectWallet" @quantity="changeQuantity" />
                <div class="text-right">
                  <b-button variant="primary" size="lg" @click="currentTabIndex = 2">
                    Confirm transaction
                  </b-button>
                </div>
            </div>
            <div v-if="currentTabIndex === 2">
                <div class="row">
                  <div class="col-12 col-md-6 mb-3">
                    <CardWallet :wallet="form.wallet"/>
                  </div>
                  <div class="col-12 col-md-6 mb-3">
                    <StakingCard :staking="form.staking" :showBtn="false" :day="form.days"/>
                  </div>
                  <div class="col-12 text-right mt-4">
                    <ButtonAction :loading="loading" loadingTx="Creating Staking" block="true" lg="true" title="Create Staking" @click="onSubmit"/>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Wallet from './Wallet.vue'
import Staking from './Staking.vue'
import CardWallet from '../../wallet/CardWallet.vue'
import StakingCard from './StakingCard.vue'
import { mapActions } from 'vuex'
export default {
    components: {
        Wallet,
        Staking,
        CardWallet,
        StakingCard
    },
    data() {
        return {
          currentTabIndex: 0,
          form: {
            wallet: null,
            staking: null,
            days: null,
            quantity: null
          },
          loading: false
        };
    },
    created () {
      this.getStakings()
    },
    methods: {
      ...mapActions('staking', ['subStaking', 'getStakings']),
    selectWallet(wallet) {
      this.form.wallet = wallet
    },
    selectStaking(staking) {
      console.log(staking, 'Prueba')
      this.form.staking = staking.staking
      this.form.days = staking.days
      this.currentTabIndex = 1
    },
    changeQuantity (data) {
      this.form.quantity = data
    },
    onSubmit() {
      this.loading = true
      this.subStaking(this.form).then(() => {
        this.loading = false
        openNotification()
        this.$router.push({ name: 'Staking' })
      })
    }
  },
}
</script>
<style>
    .form-wizard-vue .fw-body-list .fw-list-progress {
        position: absolute !important;
        height: 2px !important;
        background: #E2BD50 !important;
        top: 50% !important;
        left: 80% !important;
    }
    .form-wizard-vue .fw-step-active{
      background: #E2BD50 !important;
      color: black !important;
    }
    .form-wizard-vue .fw-btn{
      background: #E2BD50 !important;
      color: black !important
    }
</style>