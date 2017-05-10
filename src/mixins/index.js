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
    


    getCookie(c_name){
      if (document.cookie.length > 0){
        var c_start=document.cookie.indexOf(c_name + "=")
        if (c_start != -1){ 
          c_start = c_start + c_name.length+1 
          c_end=document.cookie.indexOf(";",c_start)
          if (c_end == -1) c_end = document.cookie.length
          return unescape(document.cookie.substring(c_start,c_end))
        } 
      }
      return ""
    }



  }
}
