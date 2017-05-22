const modal = weex.requireModule('modal')
export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    back (){
      this.$router.back()
    },
    alerts(text) {
        var btn = document.querySelector('.weex-toast') || false 
        if(!btn){
          btn = document.createElement('div')
          btn.className = 'weex-toast'
          btn.innerHTML = text
          document.body.appendChild(btn)
          setTimeout(function(){
                document.querySelector('.weex-toast').classList.add('hide')
          },2000)
        } else {
          document.querySelector('.weex-toast').innerHTML = text
          document.querySelector('.weex-toast').classList.remove('hide')
          setTimeout(function(){
                document.querySelector('.weex-toast').classList.add('hide')
          },2000)
        }
    },
    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return ""
    }

  }
}
