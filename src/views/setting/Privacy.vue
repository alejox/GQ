<template>
  <h2>Privacy</h2>
  <section class="termsContainer">
    <TermCardVue v-for="index in 4 " :key="index"></TermCardVue>
  </section>
</template>

<script>
  import TermCardVue from '../../components/global/TermCard.vue';
  export default {
    components: {TermCardVue}
  }
</script>

<style scoped>
  .termsContainer{
    display: flex;
    flex-wrap: wrap;
  }
</style>