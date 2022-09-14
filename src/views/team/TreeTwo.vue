<template>
    <div>
            <router-link :to="{name: 'Team', params: { username: childrens.username }}">
        <div class="card tree-card text-center">
            <div class="card-body">
                <b-avatar variant="secondary" size="4rem" :src=" apiUrl + '/uploads/users/' + childrens.image " text="B7"></b-avatar>
                <h4>
                    {{ childrens.username }}
                </h4>
            </div>
        </div>
            </router-link>
        <div class="row mt-5">
            <div class="col-6" v-for="(children, index) in childrens.childs" :key="index">
                    <router-link :to="{name: 'Team', params: { username: children.username }}">
                <div class="card tree-card text-center">
                        <div class="card-body">
                        <b-avatar variant="secondary" size="3rem" :src=" apiUrl + '/uploads/users/' + childrens.image " text="B7"></b-avatar>
                        <h6>
                            {{ children.username }}
                        </h6>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['childrens']
}
</script>
