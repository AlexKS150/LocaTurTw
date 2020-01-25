let defalutCity = '台北'
try {
  if (localStorage.city) {
    defalutCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defalutCity
}
