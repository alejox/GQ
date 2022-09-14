<template>
    <div>
        <div v-if="loading == false">
            <b-card no-body class="mb-1" v-for="section in sections" :key="section.id">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle="'section-'+section.id" class="w-100" variant="link">{{ section.name }}</b-button>
                </b-card-header>
                <b-collapse :id="'section-' + section.id" :visible="section.id == sections[0].id" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <div v-if="section.lessons && section.lessons.length > 0">
                        <div
                        class="lesson-container mb-3"
                        v-for="lesson in section.lessons"
                        :key="lesson.id"
                        >
                        <Lesson :lesson="lesson" :course_id="section.course_id" :section_id="section.id" @video="setVideo" />
                        </div>
                    </div>
                    <Empty v-else />
                    </b-card-body>
                </b-collapse>
                </b-card>
        </div>
        <Loading v-else />
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Lesson from './Lesson.vue'
export default {
    props:['course_id'],
    data () {
        return {
            loading: false
        }
    },
    components: {
        Lesson
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('section', ['getSections']),
        getData () {
            this.loading = true
            this.getSections(this.course_id).then(() => {
                this.loading = false
            })
        },
        setVideo (data) {
            this.$emit('video', data)
        }
    },
    computed: {
        ...mapState('section', ['sections'])
    }
}
</script>
<style scoped>
    .section-title{
        font-size: 22px;
        line-height: 32px;
        color: white;
    }
</style>