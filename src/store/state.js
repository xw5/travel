let currentCity = '北京'
try {
  currentCity = localStorage.getItem('city') || '北京'
} catch (err) {}

export default {
  city: currentCity
}
