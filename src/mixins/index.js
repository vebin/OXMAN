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
    alert (text) {
      modal.toast({
        message: text,
        duration: 2
      })
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
