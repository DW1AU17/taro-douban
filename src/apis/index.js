import { axios } from '../utils'

/**
 * 获取影院热映
 * @param {Object} city 城市名
 */
export function hotMovie (city = {}) {
  return axios('movie/in_theaters', city)
}