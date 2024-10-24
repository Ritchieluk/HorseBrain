<template>
<div class="swiper">
<div class="swiper-wrapper align-items center">
  <swiper
    :watch-slides-progress="true"
    :modules="modules"
    :space-between="30"
    :slides-per-view="6"
    :pagination="{ clickable: true }"
  >
    
    <swiper-slide class="swiper-slide"><span><img src="https://www.keeneland.com/sites/default/files/KLand%20Logo-1%402x.png" class="img-fluid" alt=""></span></swiper-slide>
    <swiper-slide class="swiper-slide"> <img src="https://www.keeneland.com/sites/default/files/KLand%20Logo-1%402x.png" class="img-fluid" alt=""></swiper-slide>
    <swiper-slide class="swiper-slide"><img src="https://www.keeneland.com/sites/default/files/KLand%20Logo-1%402x.png" class="img-fluid" alt=""></swiper-slide>
    <swiper-slide class="swiper-slide"><img src="https://www.keeneland.com/sites/default/files/KLand%20Logo-1%402x.png" class="img-fluid" alt=""></swiper-slide>
    <swiper-slide class="swiper-slide"><img src="https://www.keeneland.com/sites/default/files/KLand%20Logo-1%402x.png" class="img-fluid" alt=""></swiper-slide>
    <swiper-slide class="swiper-slide"><img src="https://www.keeneland.com/sites/default/files/KLand%20Logo-1%402x.png" class="img-fluid" alt=""></swiper-slide>
    <swiper-slide class="swiper-slide"><img src="https://www.keeneland.com/sites/default/files/KLand%20Logo-1%402x.png" class="img-fluid" alt=""></swiper-slide>
    <swiper-slide class="swiper-slide"><img src="https://www.keeneland.com/sites/default/files/KLand%20Logo-1%402x.png" class="img-fluid" alt=""></swiper-slide>
    
    </swiper>
  </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'

  export default defineComponent({
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination]
      }
    }
  })
</script>

<style lang="scss" scoped>


  
</style>