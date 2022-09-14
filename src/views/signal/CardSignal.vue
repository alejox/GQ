<template>
   <div class="h-100">
      <b-card class="h-100">
         <b-card-img :src="apiUrl + '/uploads/signals/'+signal.image" alt="Image" class="rounded-0 click" @click="openBig = true" />
         <div class="row">
            <div class="col-6 par">
               {{ signal.name }}
            </div>
            <div class="col-6 text-right type" :class="signal.type == 'Buy' ? 'income' : 'outcome' ">
               {{ signal.type }}
            </div>
         </div>
         <div class="row mt-3">
            <div class="col-6 title">
               <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33374 2.66699H10.6677C11.036 2.66699 11.3345 2.96551 11.3345 3.33374V7.33423C11.3345 9.1754 9.84191 10.668 8.00073 10.668V10.668C6.15956 10.668 4.66699 9.1754 4.66699 7.33423V3.33374C4.66699 2.96551 4.96551 2.66699 5.33374 2.66699Z" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.1162 8.52187L12.3777 7.89112C13.1683 7.49583 13.6677 6.68779 13.6677 5.80389V4.91251C13.6677 4.5903 13.4065 4.3291 13.0843 4.3291H11.3341" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.00134 13.335V10.668" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.668 13.3353H5.33398" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.88548 8.52187L3.62399 7.89112C2.8334 7.49583 2.33399 6.68779 2.33398 5.80389V4.91251C2.33398 4.5903 2.59518 4.3291 2.91739 4.3291H4.6676" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               Win
            </div>
            <div class="col-6 text-right detail">
               {{ signal.win }}
            </div>
         </div>
         <div class="row">
            <div class="col-6 title">
               <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6.00098" y="5.33398" width="4.00049" height="8.00098" rx="0.666748" stroke="white" stroke-width="1.00012" stroke-linejoin="round"/>
                  <path d="M13.335 2.66736H2.66699" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               Loss
            </div>
            <div class="col-6 text-right detail">
               {{ signal.loss }}
            </div>
         </div>
         <div class="row">
            <div class="col-6 title">
               <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.335 10.335H12.0015C11.2647 10.335 10.668 9.73822 10.668 9.00146V9.00146C10.668 8.26471 11.2647 7.66797 12.0015 7.66797H13.335C13.703 7.66797 14.0017 7.96667 14.0017 8.33472V9.66821C14.0017 10.0363 13.703 10.335 13.335 10.335Z" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.3347 7.66797V5.66772C13.3347 4.93097 12.738 4.33423 12.0012 4.33423H3.00012C2.44805 4.33423 2 3.88617 2 3.33411V3.33411C2 2.78204 2.44805 2.33398 3.00012 2.33398H11.3345" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.3347 10.3348V12.3351C13.3347 13.0718 12.738 13.6686 12.0012 13.6686H3.3335C2.59674 13.6686 2 13.0718 2 12.3351V3.33398" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               Total
            </div>
            <div class="col-6 text-right detail">
               {{ signal.total }}
            </div>
         </div>
         <div class="row">
            <div class="col-6 title">
               <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.00012 6.00037H2" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.00012 10.0013H2" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.66748 8.00134H1.33398" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.75781 3.75775C5.47401 2.04155 8.05503 1.52815 10.2974 2.45695C12.5397 3.38575 14.0017 5.57384 14.0017 8.00091C14.0017 10.428 12.5397 12.6161 10.2974 13.5449C8.05503 14.4737 5.47401 13.9603 3.75781 12.2441" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.00134 5.00012V5.60608" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.50098 6.81878C6.58862 6.07426 7.25485 5.53604 8.00116 5.60684" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.00134 11.0016V10.3956" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.50116 9.18359C9.41352 9.92812 8.74729 10.4663 8.00098 10.3955" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.46296 6.55396C9.23725 5.9508 8.64372 5.56612 8.00098 5.6064" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.53906 9.44824C6.76478 10.0514 7.3583 10.4361 8.00105 10.3958" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.50098 6.81836V6.81836C6.50098 7.33144 6.86314 7.7732 7.36626 7.87382L8.63606 8.12779C9.13918 8.22841 9.50134 8.67016 9.50134 9.18325V9.18325" stroke="white" stroke-width="1.00012" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               Total Profit
            </div>
            <div class="col-6 text-right detail">
               {{ signal.total_profit }}
            </div>
         </div>
      </b-card>
      <b-modal size="xl" centered hide-footer hide-header v-model="openBig">
         <img :src="apiUrl + '/uploads/signals/'+signal.image" class="w-100" alt="">
      </b-modal>
   </div>
</template>
<script>
export default {
   props: ['signal'],
   data() {
      return {
         openBig: false
      }
   }
}
</script>
<style scoped>
    .par{
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-transform: uppercase;
    }
    .type {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
    }
    .income{
        color: #0EC564;
    }
    .outcome{
        color: #FF4E78;
    }
    .title{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
    .detail{
        font-weight: 200;
        font-size: 14px;
        line-height: 24px;
    }
</style>