<template>
    <div class="container-auth">
        <div class="img-auto-logo">
            <img class="w-100" style="max-width:100px" src="@/assets/images/logo.svg" alt="">
        </div>
        <h3 class="mt-4 text-center">
            Welcome, it's good that you're here.
        </h3>
        <h6>
            Scan the code with your GQ App to login
        </h6>
        <AlertErrors />
        <qrcode-vue class="mt-5" :value="passcode" :size="250" level="H" style="margin: auto"/>
        <div class="text-center mt-2" v-if="validating == true">
            <b-spinner label="Spinning" size="sm" small />
            Validating...
        </div>
        <div class="mt-3">
            <b-button variant="link" class="w-100" size="lg" :to="{ name: 'Signin' }">
                Login with email
            </b-button>
        </div>
        <!-- {{passcode}} -->
    </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import QrcodeVue from 'qrcode.vue'
export default {
    components: {
        QrcodeVue
    },
    data () {
        return {
            loading: false,
            validating: false,
            form: {
                code: null,
                type: 'web'
            },
            secureForm: {
                ip: null,
                code: null,
                location: null,
                browser: 'Web',
                lat_long: null
            },
            interval: null,
            generateCode: null,
            timeToCheck: null
        }
    },
    created () {
        this.passcode = this.generateString(10)
        this.secureForm.code = this.passcode
        this.form.code = this.passcode
        this.loading = true
        this.getIpLogin().then(() => {
            this.loading = false
        })
        this.startToCheck()
        /* this.startRegenerate() */
    },
    onBeforeUnmount () {
        this.clearInterval(this.interval)
        this.clearInterval(this.generateCode)
    },
    methods: {
        ...mapActions('auth', ['login', 'validateQrCode', 'saveQrCode', 'createSession']),
        startToCheck () {
            this.interval = setInterval(() => {
                console.log("CHECKING")
                if(this.$route.name == 'Signin' ) {
                    this.checkQrCode()
                }
            }, 10000);
        },
        startRegenerate () {
            this.generateCode = setInterval(() => {
                if(this.$route.name == 'Signin' ) {
                    this.loading = true
                    this.passcode = this.generateString(10)
                    this.secureForm.code = this.passcode
                    this.form.code = this.passcode
                    this.loading = false
                }
            }, 60000);
        },
        generateString(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() *  charactersLength));
            }
            
            return result.toUpperCase();
        },
        async getIpLogin() {
            try {
                const geo = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=6f1a821a1df54429b487b6ca9fd9249e')
                this.secureForm.ip = geo.data.ip_address
                this.secureForm.location = geo.data.city +', ' + geo.data.region + ', ' + geo.data.country
                this.secureForm.lat_long = 'Lat: ' + geo.data.latitude + ', Long: ' + geo.data.longitude

            } catch (error) {
                console.log("Error to get")
            }
        },
        checkQrCode () {
            this.loading = true
            this.validateQrCode(this.form).then(response => {
                this.loading = false
                if(response != 'unregister') {
                    this.storeQrSession()
                    clearInterval(this.interval);
                }
            })
            this.loading = false
        },
        storeQrSession () {
            this.validating = true
            this.saveQrCode(this.secureForm).then(() => {
                axios.defaults.headers.common['DEVICEID'] = this.secureForm.code
                this.createSession(this.form).then(response => {
                    this.validating = false
                    this.$router.push({
                        path: '/'
                    })
                })
            })
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