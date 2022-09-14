<template>
  <input
    class="inputSearch"
    v-model="text"
    type="text"
    placeholder=""
    @keyup="input"
  />
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  emits: ["input"],
  setup(props, { emit }) {
    const text = ref("");
    const input = () => {
      emit("input", text.value);
    };
    return {
      input,
      text,
    };
  },
  components: {},
};
</script>
<style scoped>
.inputSearch {
  padding: 10px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  background-image: url("../assets/icons/Search.svg");
  background-position: 5% center;
  background-repeat: no-repeat;
  outline: none;
  border: none;
}
.inputSearch::placeholder {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #3c4559;
}
</style>