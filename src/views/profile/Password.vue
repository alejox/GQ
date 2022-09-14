<template>
    <div>
        <b-card>
            <h2>
                Password reset
            </h2>
            <div class="row text-left mt-5">
                <h4 class="mb-3">
                    Set your new password
                </h4>
                <div class="col-12 col-sm-6 mt-3">
                    <span>New Password</span>
                    <b-form-input type="password" placeholder="*******" v-model="form.password" />
                </div>
                <div class="col-12 col-sm-6 mt-3">
                    <span>Repeat Password</span>
                    <b-form-input type="password" placeholder="*******" v-model="r_password" />
                </div>
                <div class="col-12 text-right mt-3">
                    <ButtonAction :loading="loading" lg="true" loadingTx="Uploading info" title="Update info" @click="onSubmit"/>
                </div>
            </div>
        </b-card>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data () {
        return {
            loading: false,
            r_password: null,
            form: {
                id: null,
                password: null
            }
        }
    },
    methods: {
        ...mapActions('interceptors', ['setError']),
        ...mapActions('auth', ['password']),
        changeFiles(){
            this.user.image = this.$refs.image.files[0]
        },
        onSubmit() {
            this.loading = true
            this.form.id = this.user.id

            this.password(this.form).then(() => {
                openNotification()
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('auth', ['user'])
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