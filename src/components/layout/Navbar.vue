<template>
    <div class="navbar mt-5">
        <div class="text-right right-text mt-3">
            <b-avatar variant="secondary" :src=" apiUrl + '/uploads/users/' + user.image " text="B7"></b-avatar>
            <b-dropdown id="dropdown-1" variant="link" :text="user.username" class="m-md-2">
                <b-dropdown-item :to="{ name: 'Profile' }">Profile</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'Setting' }">Setting</b-dropdown-item>
                <b-dropdown-item @click="close">Logout</b-dropdown-item>
            </b-dropdown>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    methods: {
        ...mapActions('auth', ['logout']),
        close () {
            this.logout().then(() =>{
                this.$router.push({ name: 'Signin' })
            })
        }
    },
    computed: {
        ...mapState('auth', ['user'])
    }
}
</script>