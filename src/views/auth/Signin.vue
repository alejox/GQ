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
        <div class="form-input mt-4">
            <span>Email</span>
            <b-form-input v-model="form.email" placeholder="example@mail.com" />
        </div>
        <div class="form-input mt-4">
            <span>Password</span>
            <b-form-input type="password" placeholder="*******" v-model="form.password" />
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
        <div class="mt-4 row">
            <div class="col-6 text-left">
                <router-link class="btn btn-link" :to="{ name: 'RecoverPassword' }">
                    I forgot my password
                </router-link>
            </div>
            <div class="col-6 text-right">
                <router-link class="btn btn-link" :to="{ name: 'Home' }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99788 21.0041H5.99747C4.33992 21.0041 2.99622 19.6604 2.99622 18.0029V17.0024" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.0021 2.99658H18.0025C19.66 2.99658 21.0037 4.34029 21.0037 5.99783V6.99825" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.99622 6.99825V5.99783C2.99622 4.34029 4.33992 2.99658 5.99747 2.99658H6.99788" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.0037 17.0024V18.0029C21.0037 19.6604 19.66 21.0041 18.0025 21.0041H17.0021" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99875 5.99756H15.0012C16.6588 5.99756 18.0025 7.34126 18.0025 8.99881V10.9996H5.9975V8.99881C5.9975 7.34126 7.3412 5.99756 8.99875 5.99756Z" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.0025 14.001V15.0014C18.0025 16.6589 16.6588 18.0026 15.0012 18.0026H8.99875C7.3412 18.0026 5.9975 16.6589 5.9975 15.0014V14.001" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.99664 10.9997H20.0033" stroke="#BDBBCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    QR Code SignIn
                </router-link>
            </div>
        </div>
        <div class="mt-4">
            <ButtonAction @click="onSubmit" title="SignIn" :loading="loading" block="true" lg="true" />
            <!-- :disabled="captchaStatus== false || form.email == null || form.password == null" --> 
        </div>
        <div class="mt-4">
            <router-link class="btn btn-outline-primary w-100" :to="{ name: 'Signup' }">
                SignUp
            </router-link>
        </div>
    </div>
</template>
<script>
import { VueRecaptcha } from 'vue-recaptcha'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    components: { VueRecaptcha },
    data () {
        return {
            form: {
                email: null,
                password: null
            },
            loading: false,
            captchaMessage: null,
            captchaStatus: false
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        onSubmit () {
            this.loading = true
            this.login(this.form).then(response => {
                this.loading = false
                this.$router.push({
                    name: 'Validation'
                })
            })
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