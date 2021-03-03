<template>
  <div class="wrapper">
    <navbar />
    <Nuxt />
    <footing />
  </div>
</template>
<script>
export default {
  middleware: ['checkAuth']
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.gradient {
        background: linear-gradient(90deg, #55514d 0%, #8f827a 100%);
}
.wrapper{
  @apply gradient w-full;
}
/* .container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
</style>
