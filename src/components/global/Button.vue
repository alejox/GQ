<template>
    <b-button :disabled="disabled" :variant="variant" :class="{ 'w-100': block, 'btn-lg' : lg }">
        <span v-if="loading == false">
            {{ title }}
        </span>
        <span v-else>
            <b-spinner small label="Small Spinner"></b-spinner>
            {{loadingTx}}
        </span>
    </b-button>
</template>
<script>
export default {
    props: {
        title: {
            required: true
        },
        variant: {
            default: 'primary'
        },
        block: {
            default: false
        },
        lg: {
            default: false
        },
        loading: {
            default: false
        },
        loadingTx: {
            default: 'Loading...'
        },
        disabled: {
            default: false
        }
    }
}
</script>