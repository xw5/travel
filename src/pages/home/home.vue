<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if(this.lastCity != this.city){
        this.lastCity = this.city
        this.getHomeInfo()
      }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
      .then(this.getHomeInforSuccess)
    },
    getHomeInforSuccess (res) {
      var resData = res.data
      var resDataIn = null
      if (resData.ret && resData) {
        resDataIn = resData.data
        this.swiperList = resDataIn.swiperList
        this.iconList = resDataIn.iconList
        this.recommendList = resDataIn.recommendList
        this.weekendList = resDataIn.weekendList
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
