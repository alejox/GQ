<template>
    <div>
        <b-alert
            v-if="interceptor_errors.length != 0"
            class="text-left"
            variant="danger"
            dismissible
            fade
            :show="true"
            @dismissed="showDismissibleAlert=false"
            >
            Errors found
            <ul>
                <li v-for="error in interceptor_errors" :key="error">
                    {{error}}
                </li>
            </ul>
        </b-alert>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('interceptors', ['interceptor_errors'])
    }
}
</script>