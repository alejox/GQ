<template>
    <div>
        <div class="row">
            <div class="col-12">
                <span>Name</span>
                <b-form-input v-model="form.name"/>
            </div>
            <div class="col-12 pt-4">
                <b-form-group label="Enable section">
                    <b-form-radio-group>
                        <b-form-radio v-model="form.is_enable" name="some-radios" value="1">Enable </b-form-radio>
                        <b-form-radio v-model="form.is_enable" name="some-radios" value="0">Disable</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </div>
            <div class="text-right mt-3">
                <b-button variant="secondary" class="mr-3">
                    Cancel
                </b-button>
                <ButtonAction :loading="loading" loadingTx="Uploading section" title="Create section" @click="onSubmit" v-if="!section"/>
                <ButtonAction :loading="loading" loadingTx="Uploading section" title="Update section" @click="onUpdate" v-else/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['section', 'course_id'],
    data () {
        return {
            form: {
                name: null,
                course_id: null,
                is_enable: 1
            },
            loading: false
        }
    },
    created () {
        this.form.course_id = this.course_id
        if(this.section) {
            this.form = this.section
        }
    },
    methods: {
        ...mapActions('section', ['storeSection', 'updateSection']),
        onSubmit () {
            this.loading = true
            this.storeSection(this.form).then(() => {
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        },
        onUpdate () {
            this.loading = true
            this.updateSection({data: this.form, id: this.form.id}).then(() => {
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        }
    }
}
</script>