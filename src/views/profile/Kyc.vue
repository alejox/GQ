<template>
    <div>
        <div class="row">
            <div class="col-12 col-md-4">
                <FormKyc last="Level-0" type="Level-1" @loaded="loaded" :key="load"  />
            </div>
            <div class="col-12 col-md-4">
                <FormKyc last="Level-1" type="Level-2" @loaded="loaded" :key="load"  />
            </div>
            <div class="col-12 col-md-4">
                <FormKyc last="Level-2" type="Level-3" @loaded="loaded" :key="load" />
            </div>
        </div>
    </div>
</template>
<script>
import FormKyc from './FormKyc.vue'
export default {
    components: {
        FormKyc
    },
    data () {
        return {
            load: null
        }
    },
    methods: {
        loaded (data) {
            this.load= data
        }
    }
}
</script>