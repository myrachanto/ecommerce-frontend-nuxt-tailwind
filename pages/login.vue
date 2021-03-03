<template>
<div class="warp">
  <login :login="login"/>
</div>
</template>

<script>
import login from '~/components/forms/login.vue'
export default {
  components: { login },
  methods: {
    login (fd) {
      this.$axios.post('/login', fd)
        .then((res) => {
          console.log(res)
          const payload = { token: res.data.Token, admin: res.data.Admin }
          this.$store.commit('setToken', payload)
          this.$router.push('/aindustry')
        }).catch((err) => {
          console.log(err)
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style>
.container {
@apply h-full flex justify-center items-center text-center mx-auto;
}
.warp{
@apply mt-10 p-10 container rounded-lg overflow-hidden flex justify-center items-center ;
}
</style>
