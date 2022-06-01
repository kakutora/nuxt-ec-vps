<template>
  <div class="window">
    <div class="box1">
      <div class="main"><img src="@/assets/image/ProductListImage/1.jpg" alt=""></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div class="box2">
      <p class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe aut temporibus facere
        laudantium consequuntur, illum fugit. Natus, odio dolore laborum accusamus voluptatum perferendis? Facere
        doloribus culpa nam assumenda consequuntur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, vero
        repellendus unde consequatur ex odio. Laudantium enim omnis facere architecto perspiciatis error non. Doloribus
        accusamus consectetur molestias cum ab ipsum!</p>
      <p class="desc1">Dome Lid Clear P92008h</p>
      <p class="desc2">$2.98</p>
      <p class="cart" @click="tes">Add to Cart</p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      tes: function () {
        this.$store.commit("increment");
      }
    }
  }

</script>

<style lang="scss" scoped>
  .des {
    margin-top: 50px;
    font-size: 15px;
  }

  .desc1 {
    margin-top: 50px;
    //margin-left: 10px;
    font-size: 20px;
  }

  .desc2 {
    margin-top: 50px;
    //margin-left: 10px;
    font-size: 16px;
  }

  .cart {
    width: 250px;
    height: 75px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    font-size: 16px;
    line-height: 75px;
    background: #000000bf;
    box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
    color: #fafafa;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
      transition: all .3s ease;
      background: #00000044;
    }
  }

  .window {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .box1 {
    position: absolute;
    top: 125px;
    left: 125px;
    width: 50%;
  }

  .box2 {
    position: absolute;
    top: 125px;
    right: 125px;
    width: 35%;
    //background: gray;
  }

  .main {
    width: 600px;
    //margin: 0 auto;
    margin-top: 50px;
    aspect-ratio: 4 / 3;
    //background: #000;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin-top: 50px;

    li {
      width: 75px;
      height: 75px;
      background: #000000bf;
      box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
    }
  }

</style>
