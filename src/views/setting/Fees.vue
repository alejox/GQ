<template>
  <h2>Fees</h2>
  <section class="fees">
    <FeesCard />
    <FeesCard />
    <FeesCard />
    <FeesCard />
    <FeesCard />
    <FeesCard />
    <FeesCard />
  </section>
</template>

<script>
import FeesCard from "../../components/FeesCard.vue";
export default{
  components:{
    FeesCard
  }
}
</script>

<style scoped>
  .fees{
    display: flex;
    flex-wrap: wrap;
  }
h2 {
  font-size: 26px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 32px;
}
</style>

