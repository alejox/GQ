<template>
  <div>
    <a class="arrow" href="#">&larr; Back</a>
    <div class="text-right mb-4">
      <b-button variant="primary" @click="modalCreate = true" size="lg">
        Create Staking
      </b-button>
    </div>
    <div>
      <div class="row">
        <div
          class="col-12 col-md-6 mb-3"
          v-for="staking in stakings"
          :key="staking.id"
        >
          <StakingCard :staking="staking" />
        </div>
      </div>
    </div>
    <b-modal
      v-model="modalCreate"
      size="lg"
      centered
      hide-footer
      title="Create Staking"
    >
      <Form @close="modalCreate = false" />
    </b-modal>
  </div>
</template>
<script>
import StakingCard from "./StakingCard.vue";
import Form from "./Form.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    StakingCard,
    Form,
  },
  data() {
    return {
      modalCreate: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions("staking", ["getStakingsAdmin"]),
    getData() {
      this.loading = true;
      this.getStakingsAdmin().then(() => {
        this.loading = false;
      });
    },
  },
  computed: {
    ...mapState("staking", ["stakings"]),
  },
};
</script>

<style scoped>
.arrow {
  color: white;
  text-decoration: none;
  display: block;
  text-align: left;
  margin-bottom: 24px;
}
</style>