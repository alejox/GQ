<template>
  <div class="container">
    <article class="container__buttons">
      <router-link
        :to="{ name: 'Team', params: { username: user.username } }"
        class="text-right"
      >
          <button class="btn btn-primary btnC" v-if="username">Back to me</button>
      </router-link>
      <div>
        <InputSearch class="search" @input="setData"></InputSearch>
      </div>
    </article>
    <div class="tree-container mt-4" v-if="team.length > 0">
      <Tree :childrens="team[0]" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Tree from "./Tree.vue";
import { mapActions, mapState } from "vuex";
import InputSearch from "../../components/InputSearch.vue";
export default {
  props: ["username"],
  name: "treemap",
  components: { Tree, InputSearch },
  setup() {
    const textInput = ref("");
    const setData = (data) => {
      textInput.value = data;
    };
    return {
      setData,
    };
  },
  data() {
    return {};
  },
  created() {
    if (this.username) {
      this.getIdUser(this.username).then((response) => {
        if (response) {
          this.getTeam(response);
        }
      });
    } else {
      this.getTeam(this.user.id);
    }
  },
  methods: {
    ...mapActions("user", ["getTeam", "getIdUser"]),
    searchOtherUser(node) {
      this.$router.push({
        name: "default.Team",
        params: { username: node.name },
      });
    },
    backToMe(id) {
      this.getTeam(id);
    },
  },
  computed: {
    ...mapState("user", ["team"]),
    ...mapState("auth", ["user"]),
  },
  watch: {
    username: function () {
      if (this.username) {
        this.getIdUser(this.username).then((response) => {
          if (response) {
            this.getTeam(response);
          }
        });
      } else {
        this.getTeam(this.user.id);
      }
    },
  },
};
</script>

<style>
.tree-container {
  min-height: 60vh;
}


.container__buttons{
  display: flex;
  justify-content: end;
}
.container__buttons div{
  display: flex;
  justify-content: end;

  width: 50%;
}
.container__buttons .inputSearch{
  min-width: 300px;
}
.rich-media-node {
  width: 120px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  background-color: #00cccc;
  text-align: center;
  border-radius: 4px;
}
.node .person .avat {
  background: transparent !important;
  border: none !important;
  width: 70px !important;
  height: 60px !important;
}
.extend_handle {
  transform: translate3d(-18px, 0, 0) !important;
}
.extend_handle:before {
  width: 10px !important;
  height: 10px !important;
}
</style>
