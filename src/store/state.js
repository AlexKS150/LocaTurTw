let defalutCity = '北京'
try {
  if (localStorage.city) {
    defalutCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defalutCity
}
