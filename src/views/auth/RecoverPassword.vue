<template>
    <div class="container-auth">
        <div class="img-auto-logo">
            <img class="w-100" style="max-width:100px" src="@/assets/images/logo.svg" alt="">
        </div>
        <h3 class="mt-4">
            Recover your password to learn
        </h3>
        <h6>
            Enter your email to send recover link
        </h6>
        <AlertErrors />
        <div class="form-input mt-4">
            <span>Email</span>
            <b-form-input v-model="form.email" placeholder="carlos@mail.com" />
        </div>
        <div class="mt-4">
            <ButtonAction @click="onSubmit" title="Send link" :loading="loading" block="true" lg="true" :disabled="form.email == null" />
        </div>
        <div class="mt-4">
            <router-link class="btn btn-link w-100" :to="{ name: 'Signin' }">
                SignIn
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    data () {
        return {
            form: {
                email: null
            },
            loading: false
        }
    },
    methods: {
        ...mapActions('auth', ['resetPassword']),
        onSubmit () {
            this.loading = true
            this.resetPassword(this.form).then(response => {
                this.loading = false
                openNotification('Check your email to recover password')
                this.$router.push({
                    name: 'Signin'
                })
            })
            this.loading = false
        }
    }
}
</script>
<style scoped>
    .container-auth{
        max-width: 50%;
        margin: auto;
    }
    h3{
        text-align: left;
        font-size: 40px;
        line-height: 48px;
        color: white;
    }
    h6{
        text-align: left;
        color: white;
        font-size: 22px;
        font-weight: 200;
        line-height: 32px;
    }
    .form-input{
        text-align: left;
        color: white;
    }
</style>