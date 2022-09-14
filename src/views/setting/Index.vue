<template>
  <a class="arrow" href="#">&larr; Back</a>
  <div class="content">
    <div class="content__terms">
      <b-card no-body>
        <b-tabs card>
          <b-tab v-for="index in tabsComissions" :title="index.name">
            <b-card-text>
              <component :is="index.component"></component>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
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
        icon: "user-edit",
      },
      {
        name: "Privacy",
        title: "Seguridad",
        component: privacy,
        icon: "lock-key",
      },
      {
        name: "Fees",
        title: "Referidos",
        component: fees,
        icon: "Icon-plus",
      },
      {
        name: "Information",
        title: "Verificación KYC",
        component: information,
        icon: "checklist",
      },
    ];
    return {
      tabsComissions,
    };
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
.content {
  display: flex;
  width: 100%;
}

.content__info {
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #002a4d;
  padding: 48px;
  border-radius: 16px;
}
.content__title {
  font-size: 26px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  margin-bottom: 32px;
}
.btn {
  margin-bottom: 24px;
  color: white;
  text-align: left;
  padding: 12px 20px;
}
i {
  margin-right: 12px;
  font-size: 24px;
}
.content__terms {
  background-color: #002a4d;
  padding: 48px;
  margin-left: 24px;
  border-radius: 16px;
  width: 70%;
}
</style>