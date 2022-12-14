$(document).ready(function () {
  var browser = {
    versions: (function () {
      var u = navigator.userAgent
      return {
        // 移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, // 是否iPad
        webApp: u.indexOf('Safari') == -1, // 是否web应该程序，没有头部与底部
      }
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
  }

  var mobileUrl = getQueryString('url')
  if (mobileUrl) {
    if (browser.versions.mobile) {
      // 判断是否是移动设备打开
      location.href = mobileUrl
    } else {
      document.querySelector('.phone iframe').src = mobileUrl
    }
  }

  function getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let r = window.location.search.substring(1).match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    }
    return null
  }
})
