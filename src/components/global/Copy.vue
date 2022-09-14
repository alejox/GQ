<template>
    <div class="copy-section row" :class="color == 'full' ? 'bg-color' : '' ">
        <div class="col-10 linked">
            {{address}}
        </div>
        <div class="col-2 click text-right" @click="copyURL(address)">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.49805" y="6.99805" width="14.0058" height="14.0058" rx="2" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.49776 17.0022H5.49693C4.3919 17.0022 3.49609 16.1064 3.49609 15.0013V4.99717C3.49609 3.89214 4.3919 2.99634 5.49693 2.99634H15.5011C16.6061 2.99634 17.5019 3.89214 17.5019 4.99717V6.998" stroke="#13DC38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        address: {
            required: true
        },
        color: {
            default: 'normal'
        }
    },
    methods: {
        async copyURL (mytext) {
            try {
                await navigator.clipboard.writeText(mytext)
                openNotification('Successfully copied')
            } catch ($e) {
                openNotification('Please, try later', 'error')
            }
        }
    }
}
</script>
<style>
    .copy-section{
        border: 1px dashed #fff;
        background: rgba(255, 255, 255, 0.1);
        padding: 10px;
        border-radius: 16px;
        width: 95%;
        margin: auto;
    }
    .bg-color{
        border: 1px dashed #13DC38 !important;
        background: rgba(255, 255, 255, 0.1);
    }
    .linked{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

</style>