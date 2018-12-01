<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :letter="letter" :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet @change="handleLetterClick" :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: 'A'
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handGetCityInfoSucc)
    },
    handGetCityInfoSucc (res) {
      var resData = res.data
      console.log(resData)
      if (resData.ret && resData.data) {
        this.cities = resData.data.cities
        this.hotCities = resData.data.hotCities
      }
    },
    handleLetterClick (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>
</style>
