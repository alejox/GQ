<template>
    <div>
        <div>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-7">
                    <Video :video="video" :key="video" :type="type" v-if="video"/>
                    <Empty text="Select a lesson please" v-else/>
                    <div class="text-left mt-3">
                        <h2 class="text-white">
                            {{ course.name }}
                        </h2>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-5">
                    <Sections :course_id="course.id" @video="setVideo" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Video from './Video.vue'
import Sections from './Sections.vue'
import { mapActions, mapState } from 'vuex'
export default {
    props: ['id', 'name'],
    data () {
        return {
            modalPurchase: false,
            loading: false,
            video: null,
            type: null
        }
    },
    components: {
        Sections,
        Video
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('academy', ['getCourse']),
        getData(){
            this.loading = true
            this.getCourse(this.id).then(() => {
                this.loading = false
            })
        },
        setVideo (data) {
            this.video = data.url
            this.type = data.type
        }
    },
    computed: {
        ...mapState('academy', ['course'])
    }
}
</script>