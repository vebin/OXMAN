import fetch from './ajax'

// const HTTP_DEV = 'http://k.dev.360che.com'  // 开发
const HTTP_DEV = 'https://didi.360che.com/saas/'  // 开发
const HTTP_PRO = 'http://qa.k.360che.com'   // 预发布
const HTTPS = 'https://k.360che.com'        // 正式

const DEBUG = false                         // 是否开发模式

const URLS = DEBUG ? HTTP_PRO : HTTP_DEV

class XHR {
// 获取用户信息
  getHis (json) {
    return fetch({
              url: `${URLS}/f/his.php`,
              body: json
           })
  }

  // 热门列表数据
  getHotList (json) {
    return fetch({
              url: `${URLS}/f/hotindex.php`,
              body: json,
              type: 'post'
           })
  }
// 测试
  isCK (json) {
    return fetch({
              url: `${URLS}WeiXin/WXJSsignature.aspx`
           })
  }
}

export default new XHR()
