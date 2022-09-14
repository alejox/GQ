<template>
    <div>
        <div class="row">
            <div class="col-12">
                <span>Name</span>
                <b-form-input v-model="form.name"/>
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <span>Lesson Type</span>
                <b-form-select v-model="form.type">
                    <b-form-select-option value="file">File</b-form-select-option>
                    <b-form-select-option value="video">Upload Video</b-form-select-option>
                    <b-form-select-option value="link">Link Vimeo</b-form-select-option>
                </b-form-select>
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <span>Duration</span>
                <b-form-input v-model="form.duration"/>
            </div>
            <div class="col-12 pt-4" v-if="form.type == 'file' || form.type == 'video'">
                <span>Upload file</span>
                <input
                type="file"
                class="form-control rounded-xs"
                ref="image"
                placeholder="Your Password"
                @change="changeFiles"
                />
            </div>
            <div class="col-12 pt-4" v-else>
                <span>Video link</span>
                <b-form-input v-model="form.link"/>
            </div>

            <div class="col-12 pt-4">
                <span>Lesson summary</span>
                <b-form-textarea
                    id="textarea"
                    v-model="form.summary"
                    placeholder="Enter course description..."
                    rows="5"
                    max-rows="6"
                    />
            </div>
            <div class="col-12 col-sm-4 pt-4">
                <b-form-group label="Is free">
                    <b-form-radio-group>
                        <b-form-radio v-model="form.is_free" :aria-describedby="ariaDescribedby" name="pay_mont" value="1">Enable </b-form-radio>
                        <b-form-radio v-model="form.is_free" :aria-describedby="ariaDescribedby" name="pay_mont" value="0">Disable</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </div>
            <div class="col-12 col-sm-4 pt-4">
                <b-form-group label="Enable Comments">
                    <b-form-radio-group>
                        <b-form-radio v-model="form.enable_comments" :aria-describedby="ariaDescribedby" name="enable_comments" value="1">Enable </b-form-radio>
                        <b-form-radio v-model="form.enable_comments" :aria-describedby="ariaDescribedby" name="enable_comments" value="0">Disable</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </div>
            <div class="col-12 col-sm-4 pt-4">
                <b-form-group label="Enable lesson">
                    <b-form-radio-group>
                        <b-form-radio v-model="form.is_enable" :aria-describedby="ariaDescribedby" name="enable_asd" value="1">Enable </b-form-radio>
                        <b-form-radio v-model="form.is_enable" :aria-describedby="ariaDescribedby" name="enable_asd" value="0">Disable</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </div>
            <div class="text-right mt-3">
                <b-button variant="secondary" class="mr-3">
                    Cancel
                </b-button>
                <ButtonAction :loading="loading" loadingTx="Uploading lesson" title="Create lesson" @click="onSubmit" v-if="!lesson"/>
                <ButtonAction :loading="loading" loadingTx="Uploading lesson" title="Update lesson" @click="onUpdate" v-else/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['lesson', 'section_id', 'course_id'],
    data () {
        return {
            form: {
                name: null,
                type: 'video',
                url: '',
                duration: null,
                summary: null,
                is_free: 0,
                enable_comments: 1,
                is_enable: 1,
                section_id: null,
                link: null
            },
            loading: false
        }
    },
    created () {
        this.form.section_id = this.section_id
        if(this.lesson) {
            this.form = this.lesson
        }
    },
    methods: {
        ...mapActions('section', ['getSections']),
        ...mapActions('lesson', ['storeLesson', 'updateLesson']),
        changeFiles(){
            this.form.url = this.$refs.image.files[0]
        },
        onSubmit () {
            this.loading = true
            const formData = new FormData()
                formData.append('name', this.form.name)
                formData.append('type', this.form.type)
                formData.append('url', this.form.url)
                formData.append('duration', this.form.duration)
                formData.append('summary', this.form.summary)
                formData.append('is_free', this.form.is_free)
                formData.append('enable_comments', this.form.enable_comments)
                formData.append('is_enable', this.form.is_enable)
                formData.append('section_id', this.form.section_id)
                formData.append('link', this.form.link)
            
            this.storeLesson(formData).then(() => {
                this.getSections(this.course_id)
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
                formData.append('type', this.form.type)
                formData.append('url', this.form.url)
                formData.append('duration', this.form.duration)
                formData.append('summary', this.form.summary)
                formData.append('is_free', this.form.is_free)
                formData.append('enable_comments', this.form.enable_comments)
                formData.append('is_enable', this.form.is_enable)
                formData.append('section_id', this.form.section_id)
            
            this.updateLesson({data: formData, id: this.form.id}).then(() => {
                this.getSections(this.course_id)
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        }
    }
}
</script>