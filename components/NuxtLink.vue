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
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 60%;
    height: 55px;
    margin: 0 auto;
    background: #eeeeee;
    font-size: 18px;

    a {
      text-decoration: none;
      font-weight: bold;
      color: #2c3e50;

      &.nuxt-link-exact-active {
        color: #42b983;
      }
    }
  }

</style>
