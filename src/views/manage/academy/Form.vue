<template>
    <div>
        <div class="row">
            <div class="col-12">
                <span>Name</span>
                <b-form-input v-model="form.name"/>
            </div>
            <!-- <div class="col-12 col-sm-6 pt-4">
                <span>Price</span>
                <b-form-input v-model="form.price"/>
            </div> -->
            <div class="col-12 col-sm-6 pt-4">
                <span>Start Date</span>
                <b-form-input type="date" v-model="form.start"/>
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <span>Upload image</span>
                <input
                type="file"
                class="form-control rounded-xs"
                ref="image"
                placeholder="Your Password"
                @change="changeFiles"
                />
            </div>
            <div class="col-12 pt-4">
                <b-form-textarea
                    id="textarea"
                    v-model="form.description"
                    placeholder="Enter course description..."
                    rows="5"
                    max-rows="6"
                    />
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <b-form-group label="Enable course">
                    <b-form-radio-group>
                        <b-form-radio v-model="form.is_enable" :aria-describedby="ariaDescribedby" name="some-radios" value="1">Enable </b-form-radio>
                        <b-form-radio v-model="form.is_enable" :aria-describedby="ariaDescribedby" name="some-radios" value="0">Disable</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </div>
            <div class="text-right mt-3">
                <b-button variant="secondary" class="mr-3" @click="$emit('close')">
                    Cancel
                </b-button>
                <ButtonAction :loading="loading" loadingTx="Uploading course" title="Create course" @click="onSubmit" v-if="!course"/>
                <ButtonAction :loading="loading" loadingTx="Uploading course" title="Update course" @click="onUpdate" v-else/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    props: ['course'],
    data () {
        return {
            form: {
                name: null,
                price: 0,
                start: null,
                description: null,
                image: 'prieba',
                is_enable: 1
            },
            loading: false
        }
    },
    created () {
        if(this.course) {
            this.form = this.course
        }
    },
    methods: {
        ...mapActions('academy', ['storeCourse', 'updateCourse']),
        changeFiles(){
            this.form.image = this.$refs.image.files[0]
        },
        onSubmit () {
            this.loading = true
            const formData = new FormData()
                formData.append('name', this.form.name)
                formData.append('image', this.form.image)
                formData.append('price', this.form.price)
                formData.append('start', this.form.start)
                formData.append('description', this.form.description)
                formData.append('is_enable', this.form.is_enable)
            
            this.storeCourse(formData).then(() => {
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        },
        onUpdate () {
            this.loading = true
            const formData = new FormData()
                formData.append('id', this.form.id)
                formData.append('name', this.form.name)
                formData.append('image', this.form.image)
                formData.append('price', this.form.price)
                formData.append('start', this.form.start)
                formData.append('description', this.form.description)
                formData.append('is_enable', this.form.is_enable)
            
            this.updateCourse({data: formData, id: this.form.id}).then(() => {
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        }
    }
}
</script>