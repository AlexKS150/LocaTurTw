let defalutCity = '台北'
let defalutCityID = 0
try {
  if (localStorage.city && localStorage.cityID) {
    defalutCity = localStorage.city
    defalutCityID = localStorage.cityID
  }
} catch (e) {}

export default {
  city: defalutCity,
  cityID: defalutCityID
}
