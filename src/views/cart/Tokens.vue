<template>
    <div>
        <b-card class="p-4">
            <h3>
                Checkout payment
            </h3>
            <h5 class="mt-3">
                Resume
            </h5>
            <div class="row mt-4">
                <div class="col-6">
                    <h6>Price</h6>
                </div>
                <div class="col-6 text-right">
                    <h6>1USD = 1GQUSD</h6>
                </div>
            </div>
            <div class="mt-4">
                Elige la cantidad que desea enviar
            </div>
        </b-card>
    </div>
</template>
<script>
export default {
    props: ['token']
}
</script>