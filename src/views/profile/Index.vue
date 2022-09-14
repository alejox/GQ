<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-3">
        <b-card>
          <h4 class="mb-4">Update information</h4>

          <b-button variant="outline-primary" class="w-100" @click="tab = 1">
            Personal Information
          </b-button>
          <b-button
            variant="outline-primary"
            class="w-100 mt-3"
            @click="tab = 2"
          >
            Security
          </b-button>
          <b-button
            variant="outline-primary"
            class="w-100 mt-3"
            @click="tab = 3"
          >
            KYC
          </b-button>
        </b-card>
      </div>
      <div class="col-12 col-sm-9">
        <Profile v-if="tab == 1" />
        <Password v-else-if="tab == 2" />
        <Kyc v-else-if="tab == 3" />
      </div>
    </div>
  </div>
</template>
<script>
import Password from "./Password.vue";
import Profile from "./Profile.vue";
import FormKyc from "./FormKyc.vue";
import Kyc from "./Kyc.vue";
export default {
  components: {
    Password,
    Profile,
    FormKyc,
    Kyc,
  },
  data() {
    return {
      tab: 1,
    };
  },
};
</script>
<style>
.Profile .sidebar {
  display: none;
}
.Profile .home {
  width: 100%;
  padding: 0px 30px;
  margin-left: 0;
}
</style>