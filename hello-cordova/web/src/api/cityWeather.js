import request from './base'

export const getCityWeather = (params = {}) => {
  return request({
    url: '/aliy/city_weather',
    params
  })
}
