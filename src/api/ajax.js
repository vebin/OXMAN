import qs from 'qs'
import JQ from 'jquery'

// const stream = weex.requireModule('stream')

function filter (str) {  // 特殊字符转义
    str += ''
    str = str.replace(/%/g, '%25')
    str = str.replace(/\+/g, '%2B')
    str = str.replace(/ /g, '%20')
    str = str.replace(/\//g, '%2F')
    str = str.replace(/\?/g, '%3F')
    str = str.replace(/&/g, '%26')
    str = str.replace(/\=/g, '%3D')
    str = str.replace(/#/g, '%23')
    return str
}

const fetch = ({ url, body = null, type = 'GET'}) => {
    var setting = { url: url, type: type, data: body}
    var aData = []
    var sData = ''
    setting.type = setting.type.toUpperCase()
    return new Promise((resolve, reject) => {
        if (setting.type == 'POST') {
            JQ.ajax({
              type: 'POST',
              url: setting.url,
              dataType: 'json',
              headers: {'Content-Type':'application/x-www-form-urlencoded'},
              xhrFields: { withCredentials: true },
              // beforeSend: function (request) {
              //     request.setRequestHeader("nb", "nb.360che.com");
              // },
              data: qs.stringify(setting.data),
              success: (response) => {
                if (response.status == 200) {
                  resolve(response)
                }
                else {
                  reject(response)
                }
              }
            })
        } else {
            if(setting.data !== null) {
              for (var attr in setting.data) {
                aData.push(attr + '=' + filter(setting.data[attr]))
              }
            }
            aData.push(Math.random())
            sData = aData.join('&')
            if (setting.url.indexOf('?') > 0) {
                sData = setting.url + '&' + sData
            } else {
                sData = setting.url + '?' + sData
            }
            JQ.ajax({
              type: 'GET',
              url: sData,
              xhrFields: { withCredentials: true },
              // beforeSend: function (request) {
              //     request.setRequestHeader("nb", "nb.360che.com");
              // },
              dataType: 'json',
              success: (response) => {
                if (response.status == 200) {
                  resolve(response)
                }
                else {
                  reject(response)
                }
              } 
            })
        }
    })
}

export default fetch
