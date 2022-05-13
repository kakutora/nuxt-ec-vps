<template>
  <div class="about">
    <h1>This is a Product 2 page</h1>
    <p v-for="item in items" :key="item"></p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items: [1,2,3],
      item: []
    }
  }
}
</script>

<style scoped>
  h1 {
    margin-top: 250px;
    text-align: center;
  }

  p {
    width: 200px;
    height: 150px;
    background: #000;
    margin-bottom: 50px;
  }

</style>
