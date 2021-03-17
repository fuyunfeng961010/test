import request from './base'

export const getCityWeather = (params = {}) => {
  return request({
    url: '/aliy/city_weather',
    params
  })
}

export const getConstellList = (params = {}) => {
  return request({
    url: '/aliy/constell_list',
    params
  })
}

export const getConstellation = (params = {}) => {
  return request({
    url: '/aliy/constellation',
    params
  })
}
