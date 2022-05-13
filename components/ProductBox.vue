<template>
  <div class="productbox">
    <section>
      <h2></h2>
      <h3>{{ val.ProductName }}</h3>
      <h4>{{ val.price }}</h4>
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
  section {
    display: flex;
    flex-direction: column;
    width: 250px;
    background: #eeeeee;
    box-shadow: 12px 12px #7F848780;

    h2 {
      width: 100%;
      padding-bottom: 100%;
      background: #A0BCC2;
      margin-bottom: 25px;
      transition: transform .3s ease;

      &:hover {
        transform-origin: center center;
        transform: scale(1.1);
        transition: transform .3s ease;
      }
    }

    h3 {
      margin-bottom: 25px;
      margin-left: 10px;
      font-size: 17px;
    }

    h4 {
      margin-bottom: 25px;
      margin-left: 10px;
      font-size: 16px;
    }
  }
</style>