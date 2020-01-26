let defalutCity = '台北'
try {
  if (localStorage.city) {
    defalutCity = localStorage.city
  }
} catch (e) {
  console.log('stateWrong')
}

export default {
  city: defalutCity
}
