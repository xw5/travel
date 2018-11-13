<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper" ref="mySwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '00001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/d4/7fa0b173c269f802.jpg_750x200_b8d88f51.jpg'
        }, {
          id: '00002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'
        }
      ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .wrapper >>> .swiper-pagination-bullet-active
    background-color:#fff
  .wrapper
    width:100%
    height:0
    padding-bottom:31.25%
  .swiper-img
    width:100%
</style>
