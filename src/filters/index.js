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
  // if (time === 1) {
  //   return time + label
  // }
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
