<template>
  <div class="cont">
   <!--Hero-->
    <div class="app">
     <carouselo />
    </div>
    <div class="cv">
       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shaper"></path>
    </svg>
    </div>

     <!-- section -->
     <section class="section">
      <div class="s-head">Popular products</div>
      <div class="flexin" v-if="items">
      <div class="gridincard" >
       <cardi v-for="item in items" :key="item._id" :item="item"/>
      </div>
      </div>
      <div class="flex justify-center items-center">
      <nuxt-link to="/allproducts" class="btn2"> load more</nuxt-link>
      </div>
     </section>

     <!-- section -->
     <section class="section">
      <div class="s-head">Featured products</div>
      <div class="flexin" v-if="items">
      <div class="gridincard">
       <cardi v-for="item in items" :key="item._id" :item="item"/>
      </div>
      </div>
      <div class="flex justify-center items-center">
      <nuxt-link to="/allproducts" class="btn2"> load more</nuxt-link>
      </div>
     </section>
  </div>
</template>
<script>
import cardi from '~/components/component/cardi.vue'
// import Ratings from '~/components/component/ratings.vue'
import { http } from '~/common/index.js'
import Carouselo from '~/components/component/carouselo.vue'
export default {
  components: { cardi, Carouselo },
  data () {
    return {
      // items: []
    }
  },

  async asyncData () {
    let items = []
    try {
      const { data } = await http.get('/productlimit')
      items = data
      // console.log(items)
      return { items }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
@apply h-4/6 flex justify-between items-center text-center mx-auto;
}
.app{
  @apply pt-24;
}
.shaper{
 fill: white;
}
.gradient {
        background: linear-gradient(90deg, #ec5a20 0%, #d4b29b 100%);
}
.main{
  @apply container text-white mx-auto flex flex-wrap px-4 md:px-0 justify-between;
}
.message{
  @apply flex flex-col text-xl font-bold text-black w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left;
}
.message1{
  @apply uppercase text-xl md:text-2xl text-black tracking-normal w-full;
}
.message2{
  @apply my-4 text-2xl md:text-4xl text-gray-700 font-bold leading-tight;
}
.comment{
  @apply leading-normal text-black text-xl md:text-2xl mb-8 mr-4;
}
.btn3{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.btn2{
  @apply gradient mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.img{
  @apply w-full md:w-4/5 z-50 rounded-3xl;
}
.drimg{
  @apply w-full md:w-3/5 py-6 text-center bg-transparent;
}
.cv{
  @apply relative -mt-10 lg:-mt-24 border-transparent;
}
.section{
  @apply bg-white -mt-2 border border-b-2 py-4;
}
.s-head{
  @apply flex justify-center items-center text-3xl md:text-5xl mx-10 px-10 font-semibold text-gray-900;
}
.flexin{
  @apply flex justify-center items-center;
}
.gridincard{
  @apply grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-14;
}
.social{
  @apply flex justify-center items-center;
}
.imgsoc{
  @apply w-8 h-8 mx-3 my-5;
}
</style>
