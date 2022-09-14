<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-3 mb-3">
        <b-card class="bg-card-dots" no-body>
          <div class="bg-card-dots">
            <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-9" v-if="wallets">
                            <h6>Wallets</h6>
                            <h2>{{ wallets.length }}</h2>
                        </div>
                        <div class="col-3 text-center">
                            <div class="icon-cintainer mt-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.3549 17.087C21.8819 13.622 21.8819 8.06302 18.3549 4.59802C14.8279 1.13302 9.17088 1.13302 5.64488 4.59802C2.11888 8.06302 2.11788 13.622 5.64488 17.087" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09961 21H20.0996H4.09961Z" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 6V7.25" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 16V14.75" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.487 9C14.422 8.024 13.617 7.25 12.625 7.25H11.255C10.285 7.25 9.5 8.036 9.5 9.005C9.5 9.81 10.048 10.512 10.828 10.708L13.171 11.296C13.952 11.492 14.499 12.194 14.499 12.999C14.499 13.969 13.713 14.754 12.744 14.754H11.374C10.38 14.754 9.575 13.978 9.511 13" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </b-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3 mb-3">
        <b-card class="bg-card-dots" no-body>
          <div class="bg-card-dots">
            <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-9" v-if="stakings">
                            <h6>Stakings</h6>
                            <h2>{{ stakings.length }}</h2>
                        </div>
                        <div class="col-3 bg-icon text-center">
                            <div class="icon-cintainer mt-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.3549 17.087C21.8819 13.622 21.8819 8.06302 18.3549 4.59802C14.8279 1.13302 9.17088 1.13302 5.64488 4.59802C2.11888 8.06302 2.11788 13.622 5.64488 17.087" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09961 21H20.0996H4.09961Z" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 6V7.25" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 16V14.75" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.487 9C14.422 8.024 13.617 7.25 12.625 7.25H11.255C10.285 7.25 9.5 8.036 9.5 9.005C9.5 9.81 10.048 10.512 10.828 10.708L13.171 11.296C13.952 11.492 14.499 12.194 14.499 12.999C14.499 13.969 13.713 14.754 12.744 14.754H11.374C10.38 14.754 9.575 13.978 9.511 13" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </b-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3 mb-3">
        <b-card class="bg-card-dots" no-body>
          <div class="bg-card-dots">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-9">
                        <h6>Referred users</h6>
                        <h2>{{ user.cuantity_referrals ? user.cuantity_referrals : 0 }}</h2>
                    </div>
                    <div class="col-3 text-center">
                        <div class="icon-cintainer mt-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3549 17.087C21.8819 13.622 21.8819 8.06302 18.3549 4.59802C14.8279 1.13302 9.17088 1.13302 5.64488 4.59802C2.11888 8.06302 2.11788 13.622 5.64488 17.087" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09961 21H20.0996H4.09961Z" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V7.25" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 16V14.75" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.487 9C14.422 8.024 13.617 7.25 12.625 7.25H11.255C10.285 7.25 9.5 8.036 9.5 9.005C9.5 9.81 10.048 10.512 10.828 10.708L13.171 11.296C13.952 11.492 14.499 12.194 14.499 12.999C14.499 13.969 13.713 14.754 12.744 14.754H11.374C10.38 14.754 9.575 13.978 9.511 13" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                </div>
          </div>
        </b-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3 mb-3">
        <b-card class="bg-card-dots" no-body>
          <div class="bg-card-dots mb-3">
            <div class="card-body copy">
                <Copy color="white" class="mt-1 mb-2" :address="'https://myvetastable.com/#/auth/signup/' + user.username" />
              </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    created () {
      this.getSubStakings(0)
      this.getWallets()
    },
    data () {
        return {
            actives: 0
        }
    },
    methods: {
      ...mapActions('staking', ['getSubStakings']),
      ...mapActions('wallet', ['getWallets']),
    },
    computed: {
        ...mapState('staking', ['stakings']),
        ...mapState('wallet', ['wallets']),
        ...mapState('auth', ['user'])
    }
}
</script>
<style>
  .copy{
    margin-top: 15px !important;
    margin-bottom: 15px !important;
  }
.bg-card-dots {
  background-image: url("/images/stat.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  height: 120px;
}
.icon-cintainer{
    padding: 10px;
    background: rgba(255, 255, 255, 0.05);
    width: 50px;
    height: 50px;
    border-radius: 15px;
}
</style>
