<template>
    <div>
        <div class="row click" @click="$emit('video', lesson)">
            <div class="col-10 col-sm-10 pt-1">
                {{ lesson.name }}
            </div>
            <div class="col-2 col-sm-2 pt-1">
                <div class="custom-badged">
                    {{ lesson.duration }}
                </div>
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
            loading: false,
            modalDelete: false,
            editLesson: false
        }
    },
    methods: {
        ...mapActions('section', ['getSections']),
        ...mapActions('lesson', ['destroyLesson'])
    }
}
</script>