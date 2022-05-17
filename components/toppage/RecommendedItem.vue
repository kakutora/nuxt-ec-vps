<template>
  <div class="recommended__item" :class="'recommended__item--grid-' + data.id" @mouseenter="bool = !bool"
    @mouseleave="bool = !bool">
    <div class="recommended__desc">
      <h2>{{ data.itemDesc }}</h2>
    </div>

    <div class="recommended__image recommended__image--before-translate"
      :class="['recommended__image--temp-' + data.id, 'recommended__image--before-translate-' + data.id, bool ? 'recommended__image--after-translate-' + data.id: '']">
      <!--tempクラスは画像入れたら消す-->
      <h2><img class="recommended__test" :src="require('@/assets/image/RecommendedImages/' + data.itemImageSrc + '.jpg')" alt=""></h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendedItem',
    props: {
      data: Object
    },
    data() {
      return {
        bool: false
      }
    }
  }

</script>

<style scoped lang="scss">
  .recommended {

    &__item {
      overflow: hidden;

      &--grid-1 {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }

      &--grid-2 {
        grid-column: 3 / 5;
      }
    }

    &__desc {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #7882A4;

      h2 {
        font-size: 30px;
        color: #fafafa
      }
    }

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform .3s ease;

      h2 {
        overflow: hidden;
        width: 100%;
        height: 100%;
        font-size: 30px;
        color: #fafafa
      }

      &--temp-1 {
        background: #FF6363;
      }

      &--temp-2 {
        background: #BFD8B8;
      }

      &--temp-3 {
        background: #E7EAB5;
      }

      &--temp-4 {
        background: #BDE6F1;
      }

      &--before-translate-1 {
        transform: translateY(-100%)
      }

      &--before-translate-2 {
        transform: translate(0%, -100%)
      }

      &--before-translate-3 {
        transform: translate(0%, -100%)
      }

      &--before-translate-4 {
        transform: translateY(-100%)
      }

      &--after-translate-1 {
        transform: translateY(-200%)
      }

      &--after-translate-2 {
        transform: translate(100%, -100%)
      }

      &--after-translate-3 {
        transform: translate(-100%, -100%)
      }

      &--after-translate-4 {
        transform: translateY(0%)
      }
    }
    &__test{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

</style>
