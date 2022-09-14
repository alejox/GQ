<template>
    <div class="container-auth">
        <div class="img-auto-logo">
            <img class="w-100" style="max-width:100px" src="@/assets/images/logo.svg" alt="">
        </div>
        <h3 class="mt-4">
            Welcome
        </h3>
        <h6>
            Sign up to start the adventure of learning and earning at the same time
        </h6>
        <AlertErrors />
        <div class="form-input mt-4">
            <span>User referral</span>
            <b-form-input v-model="form.user_parent" placeholder="ExampleUser" />
        </div>
        <div class="form-input mt-4">
            <span>* Username</span>
            <b-form-input v-model="form.username" placeholder="UserExample" />
            <small class="text-danger" v-if="form.username == null">
                Required
            </small>
        </div>
        <div class="form-input mt-4">
            <span>* Names</span>
            <b-form-input v-model="form.names" placeholder="John Doe" />
            <small class="text-danger" v-if="form.names == null">
                Required
            </small>
        </div>
        <div class="form-input mt-4">
            <span>* Pais</span>
            <country-select className="form-control" v-model="form.country" topCountry="US" />
            <small class="text-danger" v-if="form.country == null">
                Required
            </small>
        </div>
        <div class="form-input mt-4">
            <span>* Number phone</span>
            
            <b-form-input v-model="form.phone" placeholder="124786874" />
            <small class="text-danger" v-if="form.phone == null">
                Required
            </small>
        </div>
        <div class="form-input mt-4">
            <span>* Email</span>
            <b-form-input v-model="form.email" placeholder="john@mail.com" />
            <small class="text-danger" v-if="form.email == null">
                Required
            </small>
        </div>
        <div class="form-input mt-4">
            <span>* Password</span>
            <b-form-input type="password" placeholder="*******" v-model="form.password" />
            <small class="text-danger" v-if="form.password == null">
                Required
            </small>
            <small class="text-danger" v-if="message != null">
                {{ message }}
            </small>
        </div>
        <div class="form-input mt-4">
            <span>* Repeat password</span>
            <b-form-input type="password" placeholder="*******" v-model="r_password" />
            <small class="text-danger" v-if="r_password == null">
                Required
            </small>
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
            <ButtonAction @click="onSubmit" title="Register" :loading="loading" block="true" lg="true" :disabled="(captchaStatus == false && mode != 'dev') || form.email == null || form.names == null || form.username == null || form.country == null || form.phone == null || form.password == null || r_password == null" />
        </div>
    </div>
</template>
<script>
import { VueRecaptcha } from 'vue-recaptcha'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    components: { VueRecaptcha },
    props: ['username'],
    data () {
        return {
            form: {
                user_parent: null,
                names: null,
                username: null,
                country: null,
                phone: null,
                email: null,
                password: null
            },
            r_password: null,
            loading: false,
            message: null
        }
    },
    created () {
        if(this.username) {
            this.form.user_parent = this.username
        }
    },
    methods: {
        ...mapActions('interceptors', ['setError']),
        ...mapActions('auth', ['register']),
        onSubmit () {
            this.loading = true
            this.register(this.form).then(response => {
                this.loading = false
                this.$router.push({
                    name: 'Signin'
                })
                openNotification(response.message + '; Login')
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
        'form.password': function (val) {
            this.form.password = val
            var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            if(this.form.password.match(passw)){
                this.message = null
            } else {
                this.message = 'Password should be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
            }
        },
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