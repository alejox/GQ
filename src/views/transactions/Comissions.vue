<template>
    <div class="row">
        <div class="col-12 col-md-6 mb-3">
            <b-card>
                <div class="row p-4">
                    <div class="col-4 text-right">
                        <div class="icon-container">
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.5 31H36.5C34.29 31 32.5 29.21 32.5 27V27C32.5 24.79 34.29 23 36.5 23H40.5C41.604 23 42.5 23.896 42.5 25V29C42.5 30.104 41.604 31 40.5 31Z" stroke="#13DC38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M40.5 23V17C40.5 14.79 38.71 13 36.5 13H9.5C7.844 13 6.5 11.656 6.5 10V10C6.5 8.344 7.844 7 9.5 7H34.5" stroke="#13DC38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M40.5 31V37C40.5 39.21 38.71 41 36.5 41H10.5C8.29 41 6.5 39.21 6.5 37V10" stroke="#13DC38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="col-8">
                        <h6>
                            Total USD
                        </h6>
                        <h1>
                            ${{ formatCurrency(user.total_usd) }}
                        </h1>
                    </div>
                </div>
            </b-card>
        </div>
         <div class="col-12 col-md-6 mb-3">
            <b-card>
                <div class="row p-4">
                    <div class="col-4 text-right">
                        <div class="icon-container">
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4971 35.0049L20.4987 39.0065L16.4971 43.0082" stroke="#13DC38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.4982 39.0063H8.49316" stroke="#13DC38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28.4967 40.5539C35.9775 38.8507 41.557 32.5939 42.3957 24.9676C43.2343 17.3414 39.1478 10.0216 32.216 6.73342C25.2841 3.44528 17.03 4.91134 11.6545 10.3855C6.27895 15.8596 4.96315 24.139 8.37674 31.01" stroke="#13DC38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.5004 16.9847V14.9839" stroke="#13DC38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.5004 28.9897V30.9906" stroke="#13DC38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.0304 27.5609C21.5445 28.4385 22.4823 28.9811 23.4994 28.9895H25.7003C27.1417 29.0259 28.3753 27.9621 28.5512 26.531C28.7271 25.0999 27.7879 23.769 26.3806 23.4552L22.631 22.5128C21.2405 22.187 20.3178 20.8672 20.4892 19.4494C20.6606 18.0315 21.8712 16.9696 23.2993 16.9845H25.5002C26.5183 16.9914 27.4573 17.5343 27.9713 18.4131" stroke="#13DC38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="col-8">
                        <h6>
                            Total Available
                        </h6>
                        <h1>
                            ${{ formatCurrency(user.total_available) }}
                        </h1>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    methods: {
        ...mapActions('auth', ['getUserInfo']),
        formatCurrency (value) {
            if(value > 0)
            {
                return value.toFixed(3)
            } else {
                return 0
            }
        }
    },
    created () {
        this.getUserInfo()
    },
    computed: {
        ...mapState('auth', ['user'])
    }
}
</script>
<style>
    .icon-container{
        background: rgba(227, 200, 122, 0.1);
        border-radius: 24px;
        padding: 10px;
        max-width: 70px;
        text-align: center;
        float: right;
    }
</style>