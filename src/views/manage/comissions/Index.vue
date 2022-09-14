<template>
  <div>
    <div class="text-right mb-3">
      <b-button variant="primary" size="lg" @click="modalCreate = true">
        Retirar total available
      </b-button>
    </div>
    <Comissions />
    <Transactions />
  </div>
</template>
<script>
import Comissions from "./Comissions.vue";
import Transactions from "./Transactions.vue";
export default {
  components: {
    Comissions,
    Transactions,
  },
};
</script>