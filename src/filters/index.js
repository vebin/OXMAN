export function host (url) {
  if (!url) return ''
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function https (url) {
  if (WXEnvironment.platform === 'iOS' && typeof url === 'string') {
    return url.replace(/^http\:/, 'https:')
  }
  return ''
}

export function timeAgo (time) {

  const between = Date.now() - Number(time)
  if (between < 3600000) {
    return pluralize(~~(between / 60000), ' 分钟')
  } else if (between < 86400000) {
    return pluralize(~~(between / 3600000), ' 小时')
  } else {
    return pluralize(~~(between / 86400000), ' 天')
  }
}

function pluralize (time, label) {
  if (time < 2 && label == '分钟') {
    return '刚刚'
  }
  return time + label + '前'
}

export function unescape (text) {
  let res = text || ''

  ;[
    ['<p>', '\n'],
    ['&amp;', '&'],
    ['&amp;', '&'],
    ['&apos;', '\''],
    ['&#x27;', '\''],
    ['&#x2F;', '/'],
    ['&#39;', '\''],
    ['&#47;', '/'],
    ['&lt;', '<'],
    ['&gt;', '>'],
    ['&nbsp;', ' '],
    ['&quot;', '"']
  ].forEach(pair => {
    res = res.replace(new RegExp(pair[0], 'ig'), pair[1])
  })

  return res
}



/**
 * 个位数前加零
 * @param  {Number} val
 * @return {String/Number}
 */
const zerofill = val => val >= 10 ? val : '0' + val
/* 相当于：
  var zerofill = function (val) {
    return val >=10 ? val : '0' + val
  };
*/

/**
 * 格式化时间
 * @param  {Number} time 时间戳
 * @param  {Number} type 格式化类型
 * @return {String}
 */
export function dataTimeFgo (time) {
  let times = time * 1
  let date = new Date(times)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let second = date.getSeconds()
  
  // 2015-01-05
  return `${year}-${zerofill(month)}-${zerofill(day)}`

  // 2015-01-05 11:12:13
  // return `${year}-${zerofill(month)}-${zerofill(day)}  ${zerofill(hours)}:${zerofill(minutes)}:${zerofill(second)}`
}

