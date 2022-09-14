<template>
    <div>
        <div class="item-menu-open" @click="isOpen = !isOpen">
            <svg width="20" height="20" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3242 28V28C9.69622 28 4.32422 22.628 4.32422 16V16C4.32422 9.372 9.69622 4 16.3242 4V4C22.9522 4 28.3242 9.372 28.3242 16V16C28.3242 22.628 22.9522 28 16.3242 28Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.6579 16.0007H10.9912" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.6572 12L21.6572 16L17.6572 20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <nav class="sidebar" :id=" isOpen == true ? 'open-sidebar' : ''">
            <header>
                <div class="image-text">
                        <img src="@/assets/images/logo.svg" style="max-width: 80px" alt="">
                </div>
            </header>

            <div class="menu-bar">
                <div class="menu">
                    <User v-if="user.role == 2"/>
                    <Admin v-if="user.role == 1"/>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Admin from './partials/Admin.vue'
import User from './partials/User.vue'
export default {
    props: {
        isOpen: {
            default: false
        }
    },
    components: {
        Admin,
        User
    },
    data () {
        return {
        }
    },
    created () {
        this.getUserInfo()
    },
    methods: {
        ...mapActions('auth', ['getUserInfo']),
        changeBar () {
            this.isOpen = !this.isOpen
        }
    },
    computed: {
        ...mapState('auth', ['user'])
    }

}
</script>
<style >
    .image-text{
        background: white;
        margin-top: 20px !important;
        border-radius: 20px;
        padding: 10px;
        width: 50px;
        height: 50px;
        margin: auto;
    }
</style>