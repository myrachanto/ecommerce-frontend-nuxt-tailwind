<template>
     <div class="card1">
       <nuxt-link to="/shopsy">
        <img :src="`${host}/${item.picture}`" class="cardimg" :alt="item.alt"/>
       </nuxt-link>
        <div class="cardbody">
          <h4 class="h4header">{{item.title}}</h4>
          <p class="cardbodyp" v-html="item.intro">
          </p>
        <nuxt-link :to="`/blogs/${item.code}`"><button class="btn3">
            For more info
          </button></nuxt-link>
        </div>
        </div>
</template>

<script>
import { host } from '~/common/index.js'
export default {
  props: ['item'],
  data: () => {
    return {
      host
    }
  }

}
</script>
<style scoped>
.card1{
  @apply bg-gray-200 rounded overflow-hidden w-60 md:w-96 shadow-lg;
}
.cardimg{
  @apply  w-full h-32 sm:h-48 object-contain;
}
.h4header{
  @apply font-semibold text-xl md:text-2xl text-gray-700 flex flex-wrap items-center justify-center leading-tight;
}
.cardbody{
  @apply m-4 text-xl text-gray-600 font-semibold;
}
</style>
