<template>
    <div class="container-auth">
        <div class="img-auto-logo">
            <img class="w-100" style="max-width:100px" src="@/assets/images/logo.svg" alt="">
        </div>
        <h3 class="mt-4">
            Welcome, it's good that you're here.
        </h3>
        <h6>
            Login with your email and password
        </h6>
        <AlertErrors />
        <div>
            <div class="form-input mt-4">
                <span>Password</span>
                <b-form-input type="password" placeholder="*******" v-model="form.password" />
            </div>
            <div class="form-input mt-4">
                <span>Repeat password</span>
                <b-form-input type="password" v-model="r_password" placeholder="*******" />
            </div>
            <div class="d-flex justify-content-center mt-3">
                <vue-recaptcha
                    sitekey="6LePV6UhAAAAAOslPQsaCKEujH2hRud3Jip-88eL"
                    @verify="verifyCaptcha"
                    @expired="expiredCaptcha"
                    @error="errorCaptcha"
                    theme="dark"
                    ></vue-recaptcha>
            </div>
            <div class="text-center mb-2">
                <small>{{ captchaMessage }}</small>
            </div>
            <div class="mt-4">
                <router-link class="btn btn-link" :to="{ name: 'RecoverPassword' }">
                    I forgot my password
                </router-link>
            </div>
            <div class="mt-4">
                <ButtonAction @click="onSubmit" title="Confirm Restore" :loading="loading" block="true" lg="true" :disabled="(captchaStatus == false && mode != 'dev') || form.password == null" />
            </div>
            <div class="mt-4">
                <router-link class="btn btn-secondary w-100" :to="{ name: 'Signin' }">
                    SignIn
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { VueRecaptcha } from 'vue-recaptcha'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    props: ['id', 'hash'],
    components: { VueRecaptcha },
    data () {
        return {
            form: {
                id: null,
                password: null
            },
            r_password: null,
            loading: false
        }
    },
    created (){
        this.form.id = this.id
    },
    methods: {
        ...mapActions('interceptors', ['setError']),
        ...mapActions('auth', ['passwordReset']),
        onSubmit () {
            this.loading = true
            this.passwordReset(this.form).then(response => {
                this.loading = false
                openNotification('Password changed, please signIn')
                this.$router.push({
                    name: 'Signin'
                })
            })
            this.loading = false
        },
        verifyCaptcha () {
            this.captchaStatus = true
            this.captchaMessage = 'Validated correctly'
        },
            expiredCaptcha () {
            this.captchaStatus = false
            this.captchaMessage = 'Please refresh page to load Captcha'
        },
            errorCaptcha () {
            this.captchaStatus = false
            this.captchaMessage = 'Error in Captcha load or solving it'
        }
    },
    watch: {
        r_password: function (val) {
            if(val != this.form.password) {
                this.setError(['Passwords not match'])
            } else {
                this.setError([])
            }
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