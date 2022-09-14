<template>
  <div>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          class="w-100"
          v-b-toggle="'section-'+section.id"
          variant="secondary"
          >{{ section.name }}</b-button
        >
      </b-card-header>
      <b-collapse
        :id="'section-'+section.id"
        :visible="visible == true"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <div class="row mb-3">
            <div class="col-4">
              <b-button
                size="sm"
                class="w-100"
                variant="danger"
                @click="modalDelete = !modalDelete"
              >
                Delete
              </b-button>
            </div>
            <div class="col-4">
              <b-button
                size="sm"
                class="w-100"
                variant="secondary"
                @click="editSection = !editSection"
              >
                Edit
              </b-button>
            </div>
            <div class="col-4">
              <b-button size="sm" class="w-100" variant="primary" @click="createLesson = !createLesson">
                New Lesson
              </b-button>
            </div>
          </div>
          <div v-if="section.lessons && section.lessons.length > 0">
            <div
              class="lesson-container mb-3"
              v-for="lesson in section.lessons"
              :key="lesson.id"
            >
              <Lesson :lesson="lesson" :course_id="section.course_id" :section_id="section.id" />
            </div>
          </div>
          <Empty v-else />
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-modal title="Create Lesson" size="lg" centered hide-footer v-model="createLesson">
      <FormLesson :course_id="section.course_id" :section_id="section.id" @close="createLesson = false" />
    </b-modal>
    <b-modal title="Edit Section" centered hide-footer v-model="editSection">
      <FormSection :section="section" @close="editSection = false" />
    </b-modal>
    <b-modal centered hide-footer title="Delete section" v-model="modalDelete">
      <h4>Sure you want delete?</h4>
      <div class="text-right">
        <b-button variant="secondary" class="mr-3" @click="modalDelete = false">
          Cancel
        </b-button>
        <ButtonAction
          :loading="loading"
          loadingTx="Deleting section"
          title="Delete section"
          @click="confirmeDelete(section.id)"
        />
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import FormLesson from './FormLesson.vue'
import FormSection from './FormSection.vue'
import Lesson from './Lesson.vue'
export default {
    props: ['section', 'visible'],
    components: {
        FormLesson,
        FormSection,
        Lesson
    },
    data () {
        return {
            createLesson: false,
            editSection: false,
            modalDelete: false,
            loading: false
        }
    },
    methods: {
        ...mapActions('section', ['destroySection']),
        confirmeDelete (id) {
            this.loading = true
            this.modalDelete = false
            this.destroySection(id).then(() => {
                this.loading = false
                openNotification()
            })
        }
    }
}
</script>
