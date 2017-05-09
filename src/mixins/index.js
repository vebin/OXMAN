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
    }
  }
}
