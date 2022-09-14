<template>
    <div class="row modalQR">
        <div class="col-12 col-sm-4 col-md-4 mb-3">
            <qrcode-vue :value="address" size="200" level="M"/>
        </div>
        <div class="col-12 col-sm-8 mb-3">
            <h3>
                Wallet address
            </h3>
            <p>
                Copy or scan the QR to deposit in this wallet
            </p>
            <Copy class="mt-4" color="full" :address="address" />
        </div>
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
export default {
    props: ['address'],
    components: {
        QrcodeVue
    }
}
</script>
<style scoped>
    .modalQR{
        padding: 20px;
        justify-content: center;
    }
    .modalQR > div:last-child{
        margin-left: -20px;
    }
    .modalQR .copy-section{
        margin-left: 0;
    }

</style>