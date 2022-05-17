<template>
  <div>
    <nav>
      <n-link to="/">Home</n-link>
      <n-link to="/productFirst">Product</n-link>
      <n-link to="/productSecond">Product2</n-link>
      <n-link to="/privacy">Privacy</n-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'NuxtLink'
  }

</script>

<style scoped lang="scss">
  nav {
    display: flex;
    align-items: center;
    gap: 75px;
    height: 55px;
    margin: 0 50px;
    color:#ffffff;
    font-size: 14px;

    a {
      color: #fafafa;
      text-decoration: none;
      font-weight: bold;

      &.nuxt-link-exact-active {
        color: #fff176;
      }
    }
  }

</style>
