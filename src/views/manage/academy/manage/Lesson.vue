<template>
    <div>
        <div class="row">
            <div class="col-12 col-sm-6 pt-2">
                {{ lesson.name }}
            </div>
            <div class="col-6 col-sm-3">
                <div>
                    {{ lesson.duration }}
                </div>
                <div class="custom-badged">
                    {{ lesson.is_enable == 1 ? 'Enable' : 'Disable' }}
                </div>
            </div>
            <div class="col-6 col-sm-3 text-right pt-2">
                <b-button size="sm" variant="danger" pill class="mr-3" @click="modalDelete = !modalDelete">Delete</b-button>
                <b-button size="sm" variant="primary" pill @click="editLesson = !editLesson">Editar</b-button>
            </div>
        </div>
    </div>
    <b-modal title="Edit Lesson" centered hide-footer v-model="editLesson">
      <FormLesson :lesson="lesson" :course_id="course_id" @close="editLesson = false" />
    </b-modal>
    <b-modal centered hide-footer title="Delete section" v-model="modalDelete">
      <h4>Sure you want delete?</h4>
      <div class="text-right">
        <b-button variant="secondary" class="mr-3" @click="modalDelete = false">
          Cancel
        </b-button>
        <ButtonAction
          :loading="loading"
          loadingTx="Deleting lesson"
          title="Delete lesson"
          @click="confirmeDelete(lesson.id)"
        />
      </div>
    </b-modal>
</template>
<script>
import { mapActions } from 'vuex'
import FormLesson from './FormLesson.vue'
export default {
    props: ['lesson', 'section_id', 'course_id'],
    components: {
        FormLesson
    },
    data () {
        return {
            loading: false,
            modalDelete: false,
            editLesson: false
        }
    },
    methods: {
        ...mapActions('section', ['getSections']),
        ...mapActions('lesson', ['destroyLesson']),
        confirmeDelete (id) {
            this.loading = true
            this.modalDelete = false
            this.destroyLesson(id).then(() => {
                this.getSections(this.course_id)
                this.loading = false
                openNotification()
            })
        }
    }
}
</script>