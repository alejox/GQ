<template>
    <div class="team-page">
        <router-link :to="{name: 'Team', params: { username: childrens.username }}">
        <div class="card text-center tree-card">
            <div class="card-body">
                <b-avatar variant="secondary" size="6rem" :src="apiUrl + '/uploads/users/' + childrens.image " text="B7"></b-avatar>
                <h4>
                    {{ childrens.username }}
                </h4>
            </div>
        </div>
            </router-link>
        <div class="row mt-5">
            <div class="col-3" v-for="(children, index) in childrens.childs" :key="index">
                <Tree :childrens="children" />
            </div>
        </div>
    </div>
</template>
<script>
import Tree from './TreeTwo.vue'
export default {
  components: { Tree },
  props: ['childrens']
}
</script>
