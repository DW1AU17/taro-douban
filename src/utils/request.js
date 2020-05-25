import Taro from '@tarojs/taro'

/**
 * request请求的封装
 * @param {String} url '地址'
 * @param {Object} options '参数'
 */
export function axios(url, options = {}) {
  const BASE_URL = 'https://douban.uieee.com/v2/'
  let len = Object.keys(options).length
  let method = len > 0 ? 'POST' : 'GET'

  return new Promise((resolve, reject) => {
    Taro.request({
      url: BASE_URL + url, 
      method,
      data: options,
      header: {
        'content-type': 'json' // 默认值
      },
      success (res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}