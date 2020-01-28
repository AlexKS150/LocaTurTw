let defalutCity = '台北'
let defalutCityID = 0
let defalutDetailID = 101
try {
  if (localStorage.city && localStorage.cityID && localStorage.detailID) {
    defalutCity = localStorage.city
    defalutCityID = localStorage.cityID
    defalutDetailID = localStorage.detailID
  }
} catch (e) {}

export default {
  city: defalutCity,
  cityID: defalutCityID,
  detailID: defalutDetailID
}
