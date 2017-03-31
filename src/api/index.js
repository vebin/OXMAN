import fetch from './ajax'

// const HTTP_DEV = 'http://k.dev.360che.com'  // 开发
const HTTP_DEV = 'http://192.168.0.247:8087'  // 开发

const HTTP_PRO = 'http://qa.k.360che.com'   // 预发布
const HTTPS = 'https://k.360che.com'        // 正式

const DEBUG = true                         // 是否开发模式

const URLS = DEBUG ? HTTP_DEV : HTTP_PRO

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


// 首页每日推荐牛人接口
  getEveryDay () {
    return fetch({
              url: `${URLS}/api/nr/Index/GetEveryDay`
           })
  }
// 首页推荐文章列表接口
  getIndexAsy (json) {
    return fetch({
              url: `${URLS}/api/nr/Index/GetIndexArticleAsync`,
              body: json
           })
  }





// 牛人标签属性接口
  getNoteName (json) {
    return fetch({
              url: `${URLS}/api/nr/Index/GetNBCategoryAsync`,
              body: json
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
