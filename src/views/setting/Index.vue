<template>
  <a class="arrow" href="#">&larr; Back</a>
  <section class="settingPage">
    <b-card no-body>
      <b-tabs card>
        <template #tabs-start>
          <h2>Information</h2>
        </template>
        <b-tab v-for="(element, index) in tabsComissions" :key="index">
          <template #title>
            <i :class="`icon-${element.icon}`"></i>{{ element.name }}
          </template>
          <b-card-text>
            <component :is="element.component"></component>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </section>
</template>

<script>
import privacy from "./Privacy.vue";
import terms from "./Terms.vue";
import fees from "./Fees.vue";
import information from "./Information.vue";
export default {
  setup() {
    const tabsComissions = [
      {
        name: "Terms & Conditions",
        title: "Datos personales",
        component: terms,
        icon: "terms",
      },
      {
        name: "Privacy",
        title: "Seguridad",
        component: privacy,
        icon: "lock",
      },
      {
        name: "Fees",
        title: "Referidos",
        component: fees,
        icon: "hand",
      },
      {
        name: "Information",
        title: "Verificación KYC",
        component: information,
        icon: "information",
      },
    ];
    return {
      tabsComissions,
    };
  },
};
</script>

<style>
  .Setting .sidebar{
      display: none;
  }
  .Setting .home{
      width: 100%;
      padding: 0px 30px;
      margin-left: 0;
  }
.arrow {
  color: white;
  text-decoration: none;
  display: block;
  text-align: left;
  margin-bottom: 24px;
}
.settingPage .card {
  background-color: transparent !important;
  box-shadow: none !important;
}

.settingPage .tabs {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 30% 65%;
  padding-bottom: 30px;
}
.settingPage .tabs h2 {
  font-size: 26px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  margin-bottom: 32px;
}
.settingPage .card-header {
  max-height: 400px;
  padding: 50px;
  background-color: rgb(0, 42, 77);
  border: none !important;
  border-radius: 16px;

}
.settingPage ul {
  display: grid;
  border: none !important;
}
.settingPage .nav-tabs .nav-link{
  width: 100%;
  text-align: start;
  color: white;
  border-radius: 16px;
}
.settingPage .nav-tabs .nav-link.active{
  font-weight: 700;
  color: #222222 !important;
  background-color: #15DC39 !important;
  border: none !important;
}
.settingPage .tab-content{
  padding: 40px;
  background-color: rgb(0, 42, 77);
  border: none !important;
  border-radius: 16px;
}

i{
  margin-right: 12px;
}
</style>