import fetch from './ajax'

// const HTTP_DEV = 'http://k.dev.360che.com'  // 开发
const HTTP_DEV = 'http://192.168.0.247:8087'  // 开发

const HTTP_PRO = 'http://qa.k.360che.com'   // 预发布
const HTTPS = 'https://k.360che.com'        // 正式

const DEBUG = true                         // 是否开发模式

const URLS = DEBUG ? HTTP_DEV : HTTP_PRO;

class XHR {
// 获取用户信息
    getHis(json) {
        return fetch({
            url: `${URLS}/f/his.php`,
            body: json
        })
    }

    // 热门列表数据
    getHotList(json) {
        return fetch({
            url: `${URLS}/f/hotindex.php`,
            body: json,
            type: 'post'
        })
    }


    // 首页每日推荐牛人接口
    getEveryDay() {
        return fetch({
            url: `${URLS}/api/nr/Index/GetEveryDay`
        })
    }

    // 首页推荐文章列表接口
    getIndexAsy(json) {
        return fetch({
            url: `${URLS}/api/nr/Index/GetIndexArticleAsync`,
            body: json
        })
    }

    // 牛人标签属性接口
    getNoteName(json) {
        return fetch({
            url: `${URLS}/api/nr/Index/GetNBCategoryAsync`,
            body: json
        })
    }

    // 测试
    isCK(json) {
        return fetch({
            url: `${URLS}WeiXin/WXJSsignature.aspx`
        })
    }

    //推荐关注九宫格接口
    getRecommendAttention(json) {
        return fetch({
            url: `${URLS}/api/nr/Follower/GetTNBListAsync`,
            body:json
        })
    }
    //关注、取消关注接口
    postAttention(json){
        return fetch({
            url: `${URLS}/api/nr/Follower/PostFollowerAsync`,
            body:json,
            type:'POST'
        })
    }
    //分类标签接口
    getCategoryList(json) {
        return fetch({
            url: `${URLS}/api/nr/Index/GetNBCategoryAsync`,
            body:json
        })
    }
    //请求已关注列表
    getFollowed(json) {
        return fetch({
            url: `${URLS}/api/nr/Follower/GetNBFollowerListAsync`,
            body:json
        })
    }
    //分类标签已关注接口
    getFollowedCategoryList(json) {
        return fetch({
            url: `${URLS}/api/nr/Follower/GetNBFollowerListByCategoryIdAsync`,
            body:json
        })
    }

    ////上传图片
    //PostHeadPortrait(json){
    //    return fetch({
    //        url: `${URLS}/api/nr/Index/PostUploadToken`,
    //        body:json,
    //        type:'POST'
    //    })
    //}
}


export default new XHR()
