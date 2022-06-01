<template>
  <div>
    <nav>
      <ul>
        <li @click="ifOpenProduct()">
          <n-link to="/">Home</n-link>
        </li>
        <li class="ProductMenu" @click="clickOpen()">
          Items
          <transition name="opacity">
            <div class="ProductList" v-show="bool">
              <n-link class="border" to="/productFirst">Chair</n-link>
              <n-link class="border" to="/productSecond">Table</n-link>
              <p class="border">Tent</p>
              <p class="border">Bonfire</p>
              <p class="border">Heating</p>
              <p class="border">Tableware</p>
              <p class="border">Field gear</p>
              <p class="border">Sleeping bag</p>
            </div>
          </transition>
        </li>
        <li>
          <n-link class="cart" to="/cart">Cart</n-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'NuxtLink',
    data() {
      return {
        bool: false
      }
    },
    methods: {
      clickOpen() {
        this.bool = !this.bool
      },
      ifOpenProduct() {
        if (this.bool == true) {
          this.bool = false
        }
      }
    }
  }

</script>

<style scoped lang="scss">
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 75px;
    width: 90%;
    height: 55px;
    margin: 0 50px;
    background: #000000bf;
    box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
    color: #ffffff;
    font-size: 14px;

    li {
      user-select: none;

      &:nth-of-type(1) {
        margin-left: 50px;
      }

      &:nth-of-type(3) {
        margin-left: auto;
        margin-right: 50px;
      }
    }

    a {
      color: #fafafa;
      text-decoration: none;
      font-weight: bold;

      &.nuxt-link-exact-active {
        color: #fff176;
      }
    }
  }

  .ProductMenu {
    position: relative;
  }

  .ProductList {
    position: absolute;
    top: 60px;
    left: 50%;
    display: grid;
    place-items: center;
    grid-template-columns: 50% 50%;
    grid-auto-rows: 25% 25% 25% 25%;
    //display: flex;
    //flex-direction: column;
    //justify-content: space-evenly;
    //align-items: center;
    width: 400px;
    height: 350px;
    transform: translate(-50%);
    background: #000000bf;
    box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);

    .border {
      width: 75%;
      height: 25px;
      white-space: nowrap;
      text-align: center;
      border-bottom: 1px solid #fff;
    }
  }

  .opacity-enter {
    opacity: 0;
  }

  .opacity-enter-active {
    transition: opacity .3s;
  }

  .opacity-enter-to {
    opacity: 1;
  }

  .opacity-leave {
    opacity: 1;
  }

  .opacity-leave-active {
    transition: opacity .3s;
  }

  .opacity-leave-to {
    opacity: 0;
  }

</style>
