<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <!-- <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div> -->
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then((res) => {
          const data = res.data
          console.log(data)
          if (res.status === 200 && data.ret) {
            this.sightName = data.data.sightName
            this.bannerImg = data.data.bannerImg
            this.DetailList = data.data.DetailList
            this.gallaryImgs = data.data.gallaryImgs
          }
        })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
