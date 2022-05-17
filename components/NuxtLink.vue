<template>
  <div>
    <nav>
      <n-link to="/">Home</n-link> |
      <n-link to="/productFirst">Product</n-link> |
      <n-link to="/productSecond">Product2</n-link> |
      <n-link to="/privacy">Privacy</n-link> |
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
    gap: 50px;
    height: 65px;
    font-size: 16px;
    color:#fafafa;

    a {
      text-decoration: none;
      font-weight: bold;
      //color: #2c3e50;
      color: #fafafa;

      &.nuxt-link-exact-active {
        //color: #42b983;
        color: #fff176;
      }
    }
  }

</style>
