<template>
  <div>
    <div class="home">
      <div class="home__top-image">
        <hooper :settings="hooperSets">
          <slide v-for="testItem in dummyRecItems" :key="testItem.id">
            <img :src="require('@/assets/image/firstview-image/' + testItem.id + '.jpg')">
          </slide>
        </hooper>
      </div>
      <div class="home__title-content">
        <h2 class="home__title-text">Camp Fire</h2>
        <p class="home__desc-text">dummydummydummy</p>
      </div>
    </div>

    <div class="recommended">
      <h2 data-aos="flip-up">Recommended Item</h2>
      <div class="recommended__box" data-aos="zoom-in">
        <RecommendedItem v-for="testItem in testItems" :key="testItem.id" :data="testItem">
        </RecommendedItem>
      </div>
    </div>


  </div>
</template>

<script>
  import {
    Hooper,
    Slide
  } from 'hooper';
  import 'hooper/dist/hooper.css';

  import RecommendedItem from "../components/toppage/RecommendedItem.vue"
  export default {
    name: "IndexPage",
    components: {
      Hooper,
      Slide,
      RecommendedItem
    },
    data() {
      return {
      }
    },
    computed: {
      dummyRecItems(){
        return this.$store.state.testItems
      },
      hooperSets(){
        return this.$store.state.hooperSets
      }
    }
  }

</script>

<style scoped lang="scss">
  .home {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 100%;
    width: 100%;
    height: 100vh;

    &__top-image {
      img {
        max-height: 100%;
      }
    }

    &__title-content {
      background: #EFEAD8;
    }

    &__title-text {}

    &__title-desc {}

    .hooper {
      background-color: #62caaa;
      width: 100%;
      height: 100%;
    }
  }

  .recommended {
    overflow: hidden;
    width: 100%;
    margin-top: 50vh;

    &__box {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      grid-template-rows: 50% 50%;
      width: 100%;
      height: 100vh;
    }

    h2 {
      display: grid;
      place-items: center;
      width: 450px;
      height: 75px;
      margin: 0 auto;
      margin-bottom: 150px;
      background: #eeeeee;
      font-size: 26px;
      box-shadow:
        0 20px 0 -10px rgb(198, 224, 231),
        0 40px 0 -20px rgb(105, 171, 209),
        0 60px 0 -30px rgb(27, 115, 165)
    }
  }

</style>
