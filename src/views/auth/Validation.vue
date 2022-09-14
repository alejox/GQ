<template>
    <div class="container-auth">
        <b-card class="p-3">
            <div class="img-auto-logo">
                <img class="w-100" style="max-width:100px" src="@/assets/images/logo.svg" alt="">
            </div>
            <h3 class="mt-4 text-center">
                Validate your login
            </h3>
            <AlertErrors />
            <div v-if="validated == true">
                <h6>
                    Enter the code sent to your email
                </h6>
                <div class="form-input mt-4">
                    <span>Validation code</span>
                    <b-form-input v-model="form.code" placeholder="UYGYASD" />
                </div>
                <div class="mt-4">
                    <ButtonAction @click="checkCode" title="Validate link" :loading="loading" block="true" lg="true" :disabled="form.code == null" />
                </div>
            </div>
            <div v-else>
                <h6>
                    Click to send validation code
                </h6>
                <ButtonAction @click="sendCode" title="Send validation link" :loading="loading" block="true" lg="true" />
            </div>
            <div class="mt-4">
                <router-link class="btn btn-link w-100" :to="{ name: 'Signin' }">
                    SignIn
                </router-link>
            </div>
        </b-card>
    </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    data () {
        return {
            form: {
                code: null
            },
            loading: false,
            validated: false
        }
    },
    created () {
        this.getIpLogin()
    },
    methods: {
        ...mapActions('auth', ['sendValidation', 'validateCode', 'saveLocation']),
        sendCode () {
            this.validated = true
            this.loading = true
            this.sendValidation().then(() => {
                this.loading = false
            })
        },
        checkCode () {
            this.loading = true
            this.validateCode(this.form).then(() => {
                this.isOkay = true
                this.loading = false
                this.$router.push({
                    path: '/'
                })
            })
            this.loading = false
        },
        async getIpLogin() {
            try {
                const geo = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=6f1a821a1df54429b487b6ca9fd9249e')
                let form = {
                    ip: geo.data.ip_address
                }
                this.saveLocation(form)

            } catch (error) {
                console.log("Error to get")
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