<template>
  <div class="productbox">
    <section>
      <n-link to="/productDesc">
        <h2><img :src="require('@/assets/image/ProductListImage/' + val.id + '.jpg')" alt=""></h2>
        <h3>{{ val.ProductName }}</h3>
        <h4>{{ val.price }}</h4>
      </n-link>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ProductBox',
    props: {
      val: Object
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.productbox{
  margin-bottom: 100px;
}
  section {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 380px;
    background: #eeeeee;
    box-shadow: 12px 12px #7F848780;

    h2 {
      width: 100%;
      height: 155px;
      background: #A0BCC2;
      margin-bottom: 90px;
      transition: transform .3s ease;
      overflow: hidden;
      img{
        width: 100%;
      }

      &:hover {
        transform-origin: center center;
        transform: scale(1.1);
        transition: transform .3s ease;
      }
    }

    h3 {
      margin-bottom: 25px;
      margin-left: 20px;
      font-size: 17px;
    }

    h4 {
      margin-bottom: 0px;
      margin-left: 20px;
      font-size: 16px;
    }
  }

  a {
    color: #1a1a1a;
    text-decoration: none;
    font-weight: bold;

    &.nuxt-link-exact-active {
      color: #fff176;
    }
  }

</style>
