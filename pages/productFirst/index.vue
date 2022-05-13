<template>
  <div class="productlist">
    <product-box v-for="val in dummyJsonVue" :key="val.id" :val="val"></product-box>
  </div>
</template>

<script>
  import dummyJson from '@/assets/MOCK_DATA.json'
  import ProductBox from '@/components/ProductBox.vue'

  export default {
    data() {
      return {
        dummyJsonVue: dummyJson
      }
    },
    components: {
      ProductBox
    }
  }

</script>

<style scoped lang="scss">
  .productlist {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 75px;
    width: 90%;
    margin: 100px auto 100px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .productlist::-webkit-scrollbar {
      display: none;
    }

</style>
