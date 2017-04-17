import fetch from './ajax'


const HTTP_DEV = 'http://192.168.0.247:8087'  // 开发
const HTTP_PRO = 'http://qa.k.360che.com'   // 预发布

const DEBUG = true                         // 是否开发模式

const URLS = DEBUG ? HTTP_DEV : HTTP_PRO

/*
//  评论系统地址说明
//  测试域名  http://cmt_test.360che.com/
//  示例：http://cmt_test.360che.com/comlist/CommentList.aspx
//  host：120.132.50.35   cmt_test.360che.com
//  正式域名：https://cmt.360che.com/
*/
const C_HTTP_DEV = 'http://cmt_test.360che.com'
const C_HTTP = 'https://cmt.360che.com'

const C_URLS = DEBUG ? C_HTTP_DEV : C_HTTP


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
// 文章详情
  getNewsMsg (json) {
    return fetch({
              url: `${URLS}/api/nr/pcedit/GetA`,
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

// 牛人个人信息接口
getManInfo(json){
  return fetch({
              url: `${URLS}/api/nr/NBMan/GetNBManInfoAsync`,
              body: json
           })
}

/*---------------C_URLS---评论相关---------------------*/
// 文章详情－评论列表
  getNewsComList (json) {
    return fetch({
              url: `${C_URLS}/api/CommentsList.ashx`,
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
