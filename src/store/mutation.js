export default{
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeCityID (state, cityID) {
    state.cityID = cityID
    try {
      localStorage.cityID = cityID
    } catch (e) {}
  },
  changeDetailID (state, detailID) {
    state.detailID = detailID
    try {
      localStorage.detailID = detailID
    } catch (e) {}
  }
}
